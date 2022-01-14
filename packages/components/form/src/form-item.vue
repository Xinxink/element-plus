<template>
  <div ref="formItemRef" :class="classes">
    <form-label-wrap
      :is-auto-width="labelStyle.width === 'auto'"
      :update-all="formContext?.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        :class="ns.e('label')"
        :style="labelStyle"
      >
        <slot name="label" :label="currentLabel">
          {{ currentLabel }}
        </slot>
      </label>
    </form-label-wrap>
    <div :class="ns.e('content')" :style="contentStyle">
      <slot></slot>
      <transition name="el-zoom-in-top">
        <slot v-if="shouldShowError" name="error" :error="validateMessage">
          <div
            :class="[
              ns.e('error'),
              {
                [ns.em('error', 'inline')]:
                  typeof inlineMessage === 'boolean'
                    ? inlineMessage
                    : formContext?.inlineMessage || false,
              },
            ]"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  getCurrentInstance,
  inject,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
  nextTick,
  useSlots,
} from 'vue'
import { NOOP } from '@vue/shared'
import AsyncValidator from 'async-validator'
import { addUnit, getPropByPath } from '@element-plus/utils'
import { formItemContextKey, formContextKey } from '@element-plus/tokens'
import { useSize, useNamespace } from '@element-plus/hooks'
import FormLabelWrap from './form-label-wrap'
import { formItemProps } from './form-item'
import type { CSSProperties } from 'vue'
import type { FormItemContext } from '@element-plus/tokens'
import type { FormValidateCallback } from './form'
import type { FormItemRule } from './form-item'

defineOptions({
  name: 'ElFormItem',
})
const props = defineProps(formItemProps)
const slots = useSlots()

const vm = getCurrentInstance()!
const formContext = inject(formContextKey, undefined)
const sizeClass = useSize(undefined, { formItem: false })
const ns = useNamespace('form-item')

const validateState = ref('')
const validateMessage = ref('')
const isValidationEnabled = ref(false)
const computedLabelWidth = ref('')
const formItemRef = ref<HTMLDivElement>()
let initialValue: any = undefined

const labelStyle = computed<CSSProperties>(() => {
  if (formContext?.labelPosition === 'top') {
    return {}
  }

  const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth || '')
  if (labelWidth) return { width: labelWidth }
  return {}
})

const contentStyle = computed<CSSProperties>(() => {
  if (formContext?.labelPosition === 'top' || formContext?.inline) {
    return {}
  }
  if (!props.label && !props.labelWidth && isNested.value) {
    return {}
  }
  const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth || '')
  if (!props.label && !slots.label) {
    return { marginLeft: labelWidth }
  }
  return {}
})

const classes = computed(() => [
  ns.b(),
  ns.m(sizeClass.value),
  ns.is('error', validateState.value === 'error'),
  ns.is('validating', validateState.value === 'validating'),
  ns.is('success', validateState.value === 'success'),
  ns.is('required', isRequired.value || props.required),
  ns.is('no-asterisk', formContext?.hideRequiredAsterisk),
  { [ns.m('feedback')]: formContext?.statusIcon },
])

const labelFor = computed(() => props.for || props.prop)
const isNested = computed(() => {
  let parent = vm.parent
  while (parent && parent.type.name !== 'ElForm') {
    if (parent.type.name === 'ElFormItem') {
      return true
    }
    parent = parent.parent
  }
  return false
})

const fieldValue = computed(() => {
  const model = formContext?.model
  if (!model || !props.prop) {
    return
  }

  let path = props.prop
  if (path.includes(':')) {
    path = path.replace(/:/, '.')
  }

  return getPropByPath(model, path, true).v
})

const getRules = () => {
  const formRules = formContext?.rules
  const selfRules = props.rules
  const requiredRule: FormItemRule[] =
    props.required !== undefined ? [{ required: !!props.required }] : []

  const prop: any = getPropByPath(formRules, props.prop || '', false)
  const normalizedRule = formRules ? prop.o[props.prop || ''] || prop.v : []

  return ([] as FormItemRule[])
    .concat(selfRules || normalizedRule || [])
    .concat(requiredRule)
}

const isRequired = computed(() => {
  return getRules().some((rule) => rule.required === true)
})

const shouldShowError = computed(() => {
  return (
    validateState.value === 'error' &&
    props.showMessage &&
    formContext?.showMessage
  )
})

const currentLabel = computed(
  () => (props.label || '') + (formContext?.labelSuffix || '')
)

const validate: FormItemContext['validate'] = (
  trigger: string,
  callback: FormValidateCallback = NOOP
) => {
  if (!isValidationEnabled.value) {
    callback()
    return
  }
  const rules = getFilteredRule(trigger)
  if ((!rules || rules.length === 0) && props.required === undefined) {
    callback()
    return
  }
  validateState.value = 'validating'
  const descriptor = {}
  if (rules && rules.length > 0) {
    rules.forEach((rule) => {
      delete rule.trigger
    })
  }
  descriptor[props.prop] = rules
  const validator = new AsyncValidator(descriptor)
  const model = {}
  model[props.prop] = fieldValue.value
  validator.validate(model, { firstFields: true }, (errors, fields) => {
    validateState.value = !errors ? 'success' : 'error'
    validateMessage.value = errors
      ? errors[0].message || `${props.prop} is required`
      : ''
    // fix: #3860 after version 3.5.2, async-validator also return fields if validation fails
    callback(validateMessage.value, errors ? fields : {})
    formContext.emit?.(
      'validate',
      props.prop,
      !errors,
      validateMessage.value || null
    )
  })
}

const clearValidate: FormItemContext['clearValidate'] = () => {
  validateState.value = ''
  validateMessage.value = ''
}

const resetField: FormItemContext['resetField'] = () => {
  const model = formContext?.model
  const value = fieldValue.value
  let path = props.prop
  if (!path) return
  if (path.indexOf(':') !== -1) {
    path = path.replace(/:/, '.')
  }
  const prop: any = getPropByPath(model, path, true)
  if (Array.isArray(value)) {
    prop.o[prop.k] = [].concat(initialValue)
  } else {
    prop.o[prop.k] = initialValue
  }
  nextTick(() => {
    clearValidate()
  })
}

const getFilteredRule = (trigger: string) => {
  const rules = getRules()

  return rules
    .filter((rule) => {
      if (!rule.trigger || trigger === '') return true
      if (Array.isArray(rule.trigger)) {
        return rule.trigger.indexOf(trigger) > -1
      } else {
        return rule.trigger === trigger
      }
    })
    .map((rule) => ({ ...rule }))
}

const evaluateValidationEnabled: FormItemContext['evaluateValidationEnabled'] =
  () => {
    isValidationEnabled.value = !!getRules().length
  }

const updateComputedLabelWidth: FormItemContext['updateComputedLabelWidth'] = (
  width
) => {
  computedLabelWidth.value = width ? `${width}px` : ''
}

watch(
  () => props.error,
  (val) => {
    validateMessage.value = val || ''
    validateState.value = val ? 'error' : ''
  },
  { immediate: true }
)
watch(
  () => props.validateStatus,
  (val) => {
    validateState.value = val || ''
  }
)

const formItemContext: FormItemContext = reactive({
  ...toRefs(props),
  $el: formItemRef,
  size: sizeClass,
  validateState,
  evaluateValidationEnabled,
  resetField,
  clearValidate,
  validate,
  updateComputedLabelWidth,
})
provide(formItemContextKey, formItemContext)

onMounted(() => {
  if (props.prop) {
    formContext?.addField(formItemContext)

    const value = fieldValue.value
    initialValue = Array.isArray(value) ? [...value] : value

    evaluateValidationEnabled()
  }
})
onBeforeUnmount(() => {
  formContext?.removeField(formItemContext)
})

defineExpose({
  validateMessage,
})
</script>
