import { Episodes } from './episodes/episodes'
import './player-episode-selector.css'
import { PlayerEpisodeSelectorProps } from './player-episode-selector.interface'
import { Translations } from './translations/translations'

export const PlayerEpisodeSelector = ({
  animeUrl
}: PlayerEpisodeSelectorProps) => {
  return <Episodes animeUrl={animeUrl} />
}
