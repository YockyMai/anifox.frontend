export const getRatingDistribution = (
  scores: { score: number; votes: number }[]
) => {
  const filledArray = []

  for (let i = 1; i <= 10; i++) {
    const rateCandidate = scores.find(({ score }) => score === i)
    filledArray.unshift(rateCandidate ? rateCandidate : { score: i, votes: 0 })
  }

  const totalVotes = filledArray.reduce((total, item) => total + item.votes, 0)

  return {
    ratings: filledArray.map((item) => ({
      ...item,
      percentage: (item.votes / totalVotes) * 100
    })),
    totalVotes
  }
}
