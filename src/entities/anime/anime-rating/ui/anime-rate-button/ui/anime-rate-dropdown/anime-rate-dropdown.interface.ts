export type AnimeRateDropdownProps = {
  scores: { score: number; votes: number }[]
  totalVotes: number
  onRateAnime: (rate: number) => void
}
