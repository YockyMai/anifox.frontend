import { UIColors } from '@/common/types/ui-colors'

export const getColorByRating = (rating: number) => {
  if (rating === 0)
    return {
      fill: 'fill-green-400',
      bg: 'bg-green-500',
      const: UIColors.GREEN
    }

  if (rating <= 3)
    return {
      fill: 'fill-red-300',
      bg: 'bg-red-300',
      const: UIColors.RED
    }
  if (rating <= 7)
    return {
      fill: 'fill-orange-300',
      bg: 'bg-orange-300',
      const: UIColors.ORANGE
    }

  return {
    fill: 'fill-green-400',
    bg: 'bg-green-500',
    const: UIColors.GREEN
  }
}
