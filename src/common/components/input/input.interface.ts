import {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode
} from 'react'

import { UISize } from '@/common/types/ui-sizes'
import { UIVariant } from '@/common/types/ui-variants'

export interface InputProps
  extends DetailedHTMLProps<
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
    HTMLInputElement
  > {
  icon?: ReactNode
  rightIcon?: ReactNode
  label?: ReactNode
  type?: HTMLInputTypeAttribute
  size?: UISize
  error?: ReactNode
  variant?: UIVariant
}
