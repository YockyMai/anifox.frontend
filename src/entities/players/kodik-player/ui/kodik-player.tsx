import { Provider, useAtomValue } from 'jotai'
import React, { memo } from 'react'

import { getPlayerLinkFromParams } from '../helpers/get-player-link-from-params'
import { useInitKodikPlayer } from '../hooks'
import { $kodikPlayerAtoms } from '../store/kodik-player'
import { KodikPlayerHeader } from './kodik-player-header/kodik-player-header'
import './kodik-player.css'
import { KodikPlayerProps } from './kodik-player.interface'

const Player = ({ animeUrl }: KodikPlayerProps) => {
  const selectedTranslation = useAtomValue(
    $kodikPlayerAtoms.selectedTranslationAtom
  )

  useInitKodikPlayer({ animeUrl })

  return (
    <div className='kodik-player-container'>
      <KodikPlayerHeader />

      {selectedTranslation && (
        <iframe
          className='kodik-player'
          allowFullScreen
          src={getPlayerLinkFromParams(selectedTranslation.link, {
            only_episode: true,
            only_season: true,
            start_from: 0
          })}
        />
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
