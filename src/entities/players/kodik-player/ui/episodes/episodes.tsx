import { useParams } from 'react-router'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeEpisodesQuery } from '@/services/queries'

import { EpisodesList } from './episodes-list'
import { EpisodesSearch } from './episodes-search'
import { useFilteredEpisodes } from './episodes-search/hooks'
import './episodes.css'

export const Episodes = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data } = useAnimeEpisodesQuery({
    animeUrl: animeUrl!,
    page: 0,
    limit: 10000
  })

  const episodes = useFilteredEpisodes(data)

  return (
    <div className='episodes'>
      <EpisodesSearch />
      <EpisodesList episodes={episodes} />
    </div>
  )
}
