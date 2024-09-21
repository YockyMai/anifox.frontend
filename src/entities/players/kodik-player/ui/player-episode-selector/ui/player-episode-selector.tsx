import { Episodes } from './episodes/episodes'
import './player-episode-selector.css'
import { PlayerEpisodeSelectorProps } from './player-episode-selector.interface'

export const PlayerEpisodeSelector = ({
  animeUrl
}: PlayerEpisodeSelectorProps) => {
  return <Episodes animeUrl={animeUrl} />
}
