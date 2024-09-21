import { ReactNode } from 'react'

import { UIAnimation } from '@/shared/types/ui-animations'
import { UISize } from '@/shared/types/ui-sizes'

export type TransitionProps = {
  duration?: UISize | number
  children: ReactNode
  mounded: boolean
  animation?: UIAnimation
  className?: string
}
