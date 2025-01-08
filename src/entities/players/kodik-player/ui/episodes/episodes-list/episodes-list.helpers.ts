import { EPISODE_CARD_HEIGHT } from './episodes-list.const'

export const getEpisodeListHeight = (episodesCount: number) => {
  const maxHeight = EPISODE_CARD_HEIGHT * 5

  const episodeListHeight = episodesCount * EPISODE_CARD_HEIGHT

  if (maxHeight <= episodeListHeight) {
    return maxHeight
  }

  return episodeListHeight
}
