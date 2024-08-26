import { useAtomValue } from 'jotai'
import React from 'react'

import { useInitKodikPlayer } from '../hooks'
import { $kodikPlayerAtoms } from '../store/kodik-player'
import './kodik-player.css'
import { KodikPlayerProps } from './kodik-player.interface'
import { PlayerEpisodeSelector } from './player-episode-selector/ui/player-episode-selector'

export const KodikPlayer = ({ animeUrl }: KodikPlayerProps) => {
  const episodeLink = useAtomValue($kodikPlayerAtoms.kodikEpisodeLink)

  useInitKodikPlayer({ animeUrl })

  return (
    <div className='kodik-player-container'>
      <div className='kodik-player__header'>
        <PlayerEpisodeSelector animeUrl={animeUrl} />
      </div>
      {episodeLink && (
        <iframe className='kodik-player' allowFullScreen src={episodeLink} />
      )}
    </div>
  )
}
