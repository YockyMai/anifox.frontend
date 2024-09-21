import { useAtomValue, useSetAtom } from 'jotai'
import React, { useCallback } from 'react'
import { FixedSizeList } from 'react-window'

import { UnstyledButton } from '@/common/components'
import { $windowAtoms } from '@/common/store/window'
import { getPlayerLinkFromParams } from '@/entities/players/kodik-player/helpers/get-player-link-from-params'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'
import { AnimeEpisode } from '@/services/api'

import { getAnimeListHeight } from '../../../helpers/get-anime-list-height'
import { $playerEpisodeAtoms } from '../../../store'
import { EpisodeSelectionCard } from './episode-card'
import './episodes-list.css'
import { EpisodesListProps } from './episodes-list.interface'

export const EpisodesList = ({ episodes, isOpened }: EpisodesListProps) => {
  const windowHeight = useAtomValue($windowAtoms.windowHeight)

  const selectedEpisode = useAtomValue($playerEpisodeAtoms.selectedEpisodeAtom)
  const selectedTranslation = useAtomValue(
    $playerEpisodeAtoms.selectedTranslationAtom
  )
  const setEpisodeLink = useSetAtom($kodikPlayerAtoms.kodikEpisodeLink)

  const onChangeEpisode = useCallback(
    (episode: AnimeEpisode) => {
      if (!selectedTranslation) {
        return
      }

      const translation =
        episode.translations.find(
          (translation) => translation.id === selectedTranslation.id
        ) ?? episode.translations[0]

      setEpisodeLink(getPlayerLinkFromParams(translation.link))
    },
    [selectedTranslation, setEpisodeLink]
  )

  const episodesListHeight = getAnimeListHeight(episodes.length, windowHeight)

  return (
    <div
      className='episodes-list'
      style={{ height: isOpened ? episodesListHeight : 0 }}
    >
      <FixedSizeList
        className='episodes-list__content'
        height={episodesListHeight}
        width={500}
        itemSize={96}
        itemCount={episodes.length}
        initialScrollOffset={
          selectedEpisode ? selectedEpisode.number * 96 - 96 : 0
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
