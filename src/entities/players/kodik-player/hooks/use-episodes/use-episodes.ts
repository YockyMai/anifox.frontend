import { useEpisodesQuery } from '@/graphql/generated/output'

import { useKodikPlayerStores } from '../../context'

export const useEpisodes = () => {
  const { $kodikPlayer } = useKodikPlayerStores()

  const animeUrl = $kodikPlayer.selectors.animeUrl()

  const { data } = useEpisodesQuery({
    variables: {
      page: 0,
      animeUrl: animeUrl!,
      limit: 1000
    }
  })

  const episodes = data?.episodes.data

  return episodes
}
