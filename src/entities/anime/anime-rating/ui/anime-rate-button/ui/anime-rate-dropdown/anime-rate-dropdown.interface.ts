export type AnimeRateDropdownProps = {
  ratingDistribution?: { rating: number; count: number }[]
  onRateAnime: (rate: number) => void
}
