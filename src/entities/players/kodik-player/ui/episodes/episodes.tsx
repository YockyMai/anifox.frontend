import { useEpisodes } from '../../hooks'
import { EpisodesList } from './episodes-list'
import { EpisodesSearch } from './episodes-search'
import { useFilteredEpisodes } from './episodes-search/hooks'
import './episodes.css'

export const Episodes = () => {
  const episodes = useEpisodes()

  const filteredEpisodes = useFilteredEpisodes(episodes)

  return (
    <div className='episodes'>
      <EpisodesSearch />
      <EpisodesList episodes={filteredEpisodes} />
    </div>
  )
}
