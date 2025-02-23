export type FetchAnimeStatisticsResponse = {
  watching: number
  completed: number
  onHold: number
  dropped: number
  planToWatch: number
  totalStatus: number
  totalVotes: number
  scores: [
    {
      score: number
      votes: number
    }
  ]
}
