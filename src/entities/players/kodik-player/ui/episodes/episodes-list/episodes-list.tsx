import { UnstyledButton, useElementSize } from '@anifox/ui'
import { useCallback } from 'react'
import { FixedSizeList } from 'react-window'

import { AnimeEpisode } from '@/services/api'

import { useKodikPlayerStores } from '../../../context'
import { EpisodeSelectionCard } from './episode-card'
import { EPISODE_CARD_HEIGHT } from './episodes-list.const'
import './episodes-list.css'
import { EpisodesListProps } from './episodes-list.interface'

export const EpisodesList = ({ episodes }: EpisodesListProps) => {
  const { $kodikPlayer } = useKodikPlayerStores()

  const selectedEpisode = $kodikPlayer.selectors.selectedEpisode()
  const selectedTranslation = $kodikPlayer.selectors.selectedTranslation()

  const onChangeEpisode = useCallback(
    (episode: AnimeEpisode) => {
      if (!selectedTranslation) {
        return
      }

      const translation =
        episode.translations.find(
          (translation) => translation.id === selectedTranslation.id
        ) ?? episode.translations[0]

      $kodikPlayer.actions.setSelectedTranslation(translation)
      $kodikPlayer.actions.setSelectedEpisode(episode)
    },
    [selectedTranslation]
  )

  const [ref, size] = useElementSize<HTMLDivElement>()

  return (
    <div ref={ref} className='episodes__list'>
      <FixedSizeList
        className='episodes__list__content'
        height={size.height}
        width={'100%'}
        itemSize={EPISODE_CARD_HEIGHT}
        itemCount={episodes.length}
        initialScrollOffset={
          selectedEpisode
            ? selectedEpisode.number * EPISODE_CARD_HEIGHT - EPISODE_CARD_HEIGHT
            : 0
        }
      >
        {({ index, style }) => (
          <UnstyledButton
            style={style}
            onClick={() => onChangeEpisode(episodes[index])}
          >
            <EpisodeSelectionCard
              isSelected={selectedEpisode?.number === episodes[index].number}
              key={episodes[index].translations[0].id}
              episode={episodes[index]}
            />
          </UnstyledButton>
        )}
      </FixedSizeList>
    </div>
  )
}
