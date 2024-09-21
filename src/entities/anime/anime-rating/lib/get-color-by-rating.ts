import { UIColors } from '@/common/types/ui-colors'

export const getColorByRating = (rating: number) => {
  if (rating <= 3) return UIColors.RED
  if (rating <= 7) return UIColors.ORANGE
  return UIColors.GREEN
}
