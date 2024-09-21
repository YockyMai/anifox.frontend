import { UIAnimations } from '@/common/types/ui-animations'
import { UISizes } from '@/common/types/ui-sizes'

export const TRANSITION_CLASS = 'css-transition'

export const MAP_TRANSITION_DURATION = {
  [UISizes.SM]: 100,
  [UISizes.MD]: 300,
  [UISizes.LG]: 500,
  [UISizes.XL]: 1000,
  [UISizes.XXL]: 1500
} as const

export const MAP_ENTER_ACTIVE_CLASS = {
  [UIAnimations.FADE]: `${TRANSITION_CLASS}_fade-in`,
  [UIAnimations.SCALE]: `${TRANSITION_CLASS}_scale-in`
} as const

export const MAP_EXIT_ACTIVE_CLASS = {
  [UIAnimations.FADE]: `${TRANSITION_CLASS}_fade-out`,
  [UIAnimations.SCALE]: `${TRANSITION_CLASS}_scale-out`
} as const
