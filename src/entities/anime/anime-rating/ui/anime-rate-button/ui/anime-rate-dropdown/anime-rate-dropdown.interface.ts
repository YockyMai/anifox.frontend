export type AnimeRateDropdownProps = {
  animeId: string
  onRateAnime: (rate: number) => void
  processedRating: number | null
  ratingMutationLoading: boolean
}
