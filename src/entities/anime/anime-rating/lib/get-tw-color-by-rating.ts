export const getTwColorByRating = (rating: number) => {
  if (rating === 0) return 'bg-green-400'

  if (rating <= 3) return 'bg-red-400'
  if (rating <= 7) return 'bg-orange-300'

  return 'bg-green-400'
}
