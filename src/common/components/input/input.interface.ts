import {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode
} from 'react'

import { UISize } from '@/shared/types/ui-sizes'
import { UIVariant } from '@/shared/types/ui-variants'

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
