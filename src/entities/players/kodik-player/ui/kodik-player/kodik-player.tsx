import { memo, useRef } from 'react'

import {
  KodikPlayerStoresProvider,
  useKodikPlayerStores
} from '../../context/kodik-player.context'
import { getPlayerLinkFromParams } from '../../helpers/get-player-link-from-params'
import { useInitKodikPlayer } from '../../hooks'
import { KodikSidebar } from '../kodik-sidebar'
import './kodik-player.css'
import { KodikPlayerProps } from './kodik-player.interface'

const KodikPlayer = ({ animeUrl }: KodikPlayerProps) => {
  const { $kodikPlayer } = useKodikPlayerStores()

  const playerRef = useRef<HTMLIFrameElement>(null)

  const selectedTranslation = $kodikPlayer.selectors.selectedTranslation()

  const { isLoading } = useInitKodikPlayer({ animeUrl })

  if (isLoading) {
    return null
  }

  return (
    <div className='kodik-player'>
      <div className='kodik-player__frame-container'>
        {selectedTranslation && (
          <iframe
            ref={playerRef}
            className='kodik-player__frame'
            allowFullScreen
            src={getPlayerLinkFromParams(selectedTranslation.link, {
              only_episode: true,
              only_season: true,
              start_from: 0
            })}
          />
        )}
      </div>

      <KodikSidebar />
    </div>
  )
}

const Root = ({ animeUrl }: KodikPlayerProps) => {
  return (
    <KodikPlayerStoresProvider>
      <KodikPlayer animeUrl={animeUrl} />
    </KodikPlayerStoresProvider>
  )
}

export default memo(Root)
