import { componentSizes } from '@element-plus/constants'
import { buildProps, definePropType, type Arrayable } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { RuleItem } from 'async-validator'
import type FormItem from './form-item.vue'

export interface FormItemRule extends RuleItem {
  trigger?: string
}

export const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  prop: String,
  required: {
    type: Boolean,
    default: undefined,
  },
  rules: {
    type: definePropType<Arrayable<FormItemRule>>([Object, Array]),
  },
  error: String,
  validateStatus: String,
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: '',
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    values: componentSizes,
  },
} as const)
export type FormItemProps = ExtractPropTypes<typeof formItemProps>

export type FormItemInstance = InstanceType<typeof FormItem>
