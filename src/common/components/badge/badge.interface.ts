import { HTMLAttributes, ReactNode } from 'react'

import { UIColor } from '@/common/types/ui-colors'
import { UISize } from '@/common/types/ui-sizes'
import { UIVariant } from '@/common/types/ui-variants'

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  radius?: UISize
  variant?: UIVariant
  color?: UIColor
  size?: UISize
}
