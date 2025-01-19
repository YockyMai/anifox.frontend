import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { UIColor } from '@/common/types/ui-colors'
import { UISize } from '@/common/types/ui-sizes'
import { UIVariant } from '@/common/types/ui-variants'

export interface ButtonProps
  extends DetailedHTMLProps<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    HTMLButtonElement
  > {
  children: ReactNode
  size?: UISize
  withRipple?: boolean
  variant?: UIVariant
  color?: UIColor
  icon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  radius?: UISize
  type?: 'submit'
  isLoading?: boolean
}
