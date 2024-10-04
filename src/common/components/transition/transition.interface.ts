import { ReactNode } from 'react'

import { UIAnimation } from '@/common/types/ui-animations'
import { UISize } from '@/common/types/ui-sizes'

export type TransitionProps = {
  duration?: UISize | number
  children: ReactNode
  mounded: boolean
  animation?: UIAnimation
  className?: string
}
