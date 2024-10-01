import { EPISODE_CARD_HEIGHT } from '../ui/episodes/episodes-list/episodes-list.const'

export const getAnimeListHeight = (
  episodesCount: number,
  screenHeight: number
) => {
  const maxHeight = screenHeight * 0.5

  const selectorHeight = episodesCount * EPISODE_CARD_HEIGHT

  if (selectorHeight > maxHeight) {
    return maxHeight
  }

  return selectorHeight
}
