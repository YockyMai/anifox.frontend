import React from 'react'

import { PlayerEpisodeSelector } from '../player-episode-selector/ui/player-episode-selector'
import './kodik-player-header.css'

export const KodikPlayerHeader = () => {
  return (
    <div className='kodik-player__header'>
      <PlayerEpisodeSelector />
    </div>
  )
}
