<template>
  <form :class="formKls">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { computed, provide, reactive, toRefs, watch } from 'vue'
import { debugWarn } from '@element-plus/utils'
import { formContextKey } from '@element-plus/tokens'
import { useNamespace, useSize } from '@element-plus/hooks'
import { useFormLabelWidth, formProps, formEmits, filterFields } from './form'
import type { ValidateError, ValidateFieldsError } from 'async-validator'
import type { FormValidateCallback } from './form'
import type { FormItemContext, FormContext } from '@element-plus/tokens'

const COMPONENT_NAME = 'ElForm'
defineOptions({
  name: 'ElForm',
})
const props = defineProps(formProps)
const emit = defineEmits(formEmits)

const fields: FormItemContext[] = []

const formSize = useSize()
const ns = useNamespace('form')
const formKls = computed(() => {
  const { labelPosition, inline } = props
  return [
    ns.b(),
    ns.m(formSize.value),
    {
      [ns.m(`label-${labelPosition}`)]: labelPosition,
      [ns.m('inline')]: inline,
    },
  ]
})

const addField: FormContext['addField'] = (field) => fields.push(field)
const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}
const resetFields: FormContext['resetFields'] = () => {
  if (!props.model) {
    debugWarn(COMPONENT_NAME, 'model is required for resetFields to work.')
    return
  }

  fields.forEach((field) => field.resetField())
}
const clearValidate: FormContext['clearValidate'] = (props = []) => {
  filterFields(fields, props).forEach((field) => field.clearValidate())
}

function validate(callback: FormValidateCallback): void
function validate(): Promise<true>
function validate(callback?: FormValidateCallback): Promise<true> | void {
  if (!callback) {
    return new Promise<true>((resolve, reject) => {
      validate((valid, invalidFields) => {
        if (valid) resolve(true)
        else reject(invalidFields)
      })
    })
  }

  if (!props.model) {
    debugWarn(COMPONENT_NAME, 'model is required for validate to work!')
    return
  }

  if (fields.length === 0) {
    callback(true)
  }

  let valid = true
  let count = 0
  let invalidFields: Record<string, ValidateError[]> = {}
  let firstInvalidFields: ValidateFieldsError

  for (const field of fields) {
    field.validate('', (message, field) => {
      if (message) {
        valid = false
        if (!firstInvalidFields && field) firstInvalidFields = field
      }

      count++
      invalidFields = { ...invalidFields, ...field }

      if (count === fields.length) {
        callback(valid, invalidFields)
      }
    })
  }

  if (!valid && props.scrollToError) {
    scrollToField(Object.keys(firstInvalidFields!)[0])
  }
}

const validateField: FormContext['validateField'] = (props, cb) => {
  const fds = filterFields(fields, props)
  if (!fds.length) {
    debugWarn(COMPONENT_NAME, 'please pass correct props!')
    return
  }
  fds.forEach((field) => field.validate('', cb))
}

const scrollToField = (prop: string) => {
  const field = filterFields(fields, prop)[0]
  if (field) {
    field.$el?.scrollIntoView()
  }
}

watch(
  () => props.rules,
  () => {
    fields.forEach((field) => {
      field.evaluateValidationEnabled()
    })

    if (props.validateOnRuleChange) {
      validate(() => ({}))
    }
  }
)

provide(
  formContextKey,
  reactive({
    ...toRefs(props),
    emit,

    resetFields,
    clearValidate,
    validateField,
    addField,
    removeField,

    ...useFormLabelWidth(),
  })
)

defineExpose({
  /** @description validate form */
  validate,
  /** @description reset fields */
  resetFields,
  /** @description TODO */
  clearValidate,
  /** @description TODO */
  scrollToField,
})
</script>
