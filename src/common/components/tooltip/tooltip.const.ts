import { UISizes } from '@/common/types/ui-sizes'

export const COLLISION_PADDING = {
  bottom: 20,
  top: 20,
  left: 20,
  right: 20
}

export const TOOLTIP_OFFSET = {
  [UISizes.SM]: 1,
  [UISizes.MD]: 3,
  [UISizes.LG]: 5,
  [UISizes.XL]: 8,
  [UISizes.XXL]: 10
} as const
