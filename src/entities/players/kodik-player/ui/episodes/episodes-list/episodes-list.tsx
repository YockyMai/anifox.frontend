import { UnstyledButton, useElementSize } from '@anifox/ui'
import { useCallback, useState } from 'react'
import { FixedSizeList } from 'react-window'

import { EpisodeFragment } from '@/graphql/generated/output'

import { useKodikPlayerStores } from '../../../context'
import { EpisodeSelectionCard } from './episode-card'
import { EpisodeFullInfoModal } from './episode-full-info-modal/episode-full-info-modal'
import { EPISODE_CARD_HEIGHT } from './episodes-list.const'
import './episodes-list.css'
import { EpisodesListProps } from './episodes-list.interface'

export const EpisodesList = ({ episodes }: EpisodesListProps) => {
  const [fullOpenedSeasonId, setFullOpenedSeasonId] = useState<null | string>(
    null
  )

  const fullOpenedEpisode = episodes.find(
    (episode) => episode.id === fullOpenedSeasonId
  )

  const { $kodikPlayer } = useKodikPlayerStores()

  const selectedEpisode = $kodikPlayer.selectors.selectedEpisode()
  const selectedTranslation = $kodikPlayer.selectors.selectedTranslation()

  const onChangeEpisode = useCallback(
    (episode: EpisodeFragment) => {
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
      {fullOpenedEpisode && (
        <EpisodeFullInfoModal
          episode={fullOpenedEpisode}
          onClose={() => setFullOpenedSeasonId(null)}
          open={!!fullOpenedEpisode}
        />
      )}

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
              onOpenFullInfo={() => setFullOpenedSeasonId(episodes[index].id)}
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
