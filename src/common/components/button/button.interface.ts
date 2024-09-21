import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { UIColor } from '@/shared/types/ui-colors'
import { UISize } from '@/shared/types/ui-sizes'
import { UIVariant } from '@/shared/types/ui-variants'

export interface ButtonProps
  extends DetailedHTMLProps<
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    HTMLButtonElement
  > {
  children: ReactNode
  size?: UISize
  withRipple?: boolean
  variant?: UIVariant
  color?: UIColor | 'light-blue'
  icon?: ReactNode
  rightIcon?: ReactNode
  fullWidth?: boolean
  radius?: UISize
  type?: 'submit'
}
