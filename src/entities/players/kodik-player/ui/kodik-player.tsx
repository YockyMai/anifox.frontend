import { Provider, useAtomValue } from 'jotai'
import React, { memo } from 'react'

import { useInitKodikPlayer } from '../hooks'
import { $kodikPlayerAtoms } from '../store/kodik-player'
import { KodikPlayerHeader } from './kodik-player-header/kodik-player-header'
import './kodik-player.css'
import { KodikPlayerProps } from './kodik-player.interface'

const Player = ({ animeUrl }: KodikPlayerProps) => {
  const episodeLink = useAtomValue($kodikPlayerAtoms.episodeLink)

  useInitKodikPlayer({ animeUrl })

  return (
    <div className='kodik-player-container'>
      <KodikPlayerHeader />

      {episodeLink && (
        <iframe className='kodik-player' allowFullScreen src={episodeLink} />
      )}
    </div>
  )
}

const KodikPlayer = ({ animeUrl }: KodikPlayerProps) => (
  <Provider>
    <Player animeUrl={animeUrl} />
  </Provider>
)

export default memo(KodikPlayer)
