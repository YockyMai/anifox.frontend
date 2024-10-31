'use client'

import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { FixedSizeList } from 'react-window'

import { UnstyledButton } from '@/common/components'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'
import { AnimeEpisode } from '@/services/api'

import { EpisodeSelectionCard } from './episode-card'
import { EPISODE_CARD_HEIGHT } from './episodes-list.const'
import './episodes-list.css'
import { getEpisodeListHeight } from './episodes-list.helpers'
import { EpisodesListProps } from './episodes-list.interface'

export const EpisodesList = ({ episodes }: EpisodesListProps) => {
  const [selectedEpisode, setSelectedEpisode] = useAtom(
    $kodikPlayerAtoms.selectedEpisodeAtom
  )
  const [selectedTranslation, setSelectedTranslation] = useAtom(
    $kodikPlayerAtoms.selectedTranslationAtom
  )

  const onChangeEpisode = useCallback(
    (episode: AnimeEpisode) => {
      if (!selectedTranslation) {
        return
      }

      const translation =
        episode.translations.find(
          (translation) => translation.id === selectedTranslation.id
        ) ?? episode.translations[0]

      setSelectedTranslation(translation)
      setSelectedEpisode(episode)
    },
    [selectedTranslation, setSelectedEpisode, setSelectedTranslation]
  )

  return (
    <div className='episodes__list'>
      <FixedSizeList
        className='episodes__list__content'
        height={getEpisodeListHeight(episodes.length)}
        width={500}
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
