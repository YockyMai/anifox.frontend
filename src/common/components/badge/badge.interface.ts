import { HTMLAttributes, ReactNode } from 'react'

import { UIColor } from '@/shared/types/ui-colors'
import { UISize } from '@/shared/types/ui-sizes'
import { UIVariant } from '@/shared/types/ui-variants'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  radius?: UISize
  variant?: UIVariant
  color?: UIColor
  size?: UISize
}
