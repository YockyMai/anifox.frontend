import { $viewer } from '@/entities/viewer'
import { useEpisodesQuery } from '@/graphql/generated/output'

import { useKodikPlayerStores } from '../../context'

export const useEpisodes = () => {
  const viewer = $viewer.selectors.viewer()
  const { $kodikPlayer } = useKodikPlayerStores()

  const animeUrl = $kodikPlayer.selectors.animeUrl()

  const { data } = useEpisodesQuery({
    variables: {
      page: 0,
      animeUrl: animeUrl!,
      limit: 1000,
      userId: viewer?.id
    }
  })

  const episodes = data?.episodes.data

  return episodes
}
