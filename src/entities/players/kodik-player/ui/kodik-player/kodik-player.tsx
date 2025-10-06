import { memo, useRef } from 'react'

import {
  KodikPlayerStoresProvider,
  useKodikPlayerStores
} from '../../context/kodik-player.context'
import { getPlayerLinkFromParams } from '../../helpers/get-player-link-from-params'
import { useInitKodikPlayer } from '../../hooks'
import { KodikMessageListener } from '../kodik-message-listener/kodik-message-listener'
import { KodikSidebar } from '../kodik-sidebar'
import { KodikPlayerProps } from './kodik-player.interface'

const KodikPlayer = () => {
  const { $kodikPlayer } = useKodikPlayerStores()

  const playerRef = useRef<HTMLIFrameElement>(null)

  const selectedTranslation = $kodikPlayer.selectors.selectedTranslation()

  return (
    <div className='relative mx-auto grid w-full gap-x-4 py-5 xl:grid-cols-[auto_400px]'>
      <KodikMessageListener />
      <div className='mx-auto aspect-[12/6] w-full drop-shadow-2xl'>
        {selectedTranslation && (
          <iframe
            ref={playerRef}
            className='h-full w-full rounded-t-lg xl:rounded-lg'
            allowFullScreen
            src={getPlayerLinkFromParams(selectedTranslation.kodikPlayerLink, {
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

const Root = ({ animeUrl, animeId }: KodikPlayerProps) => {
  const initialKodikPlayerStore = useInitKodikPlayer({ animeUrl, animeId })

  if (!initialKodikPlayerStore) {
    return null
  }

  return (
    <KodikPlayerStoresProvider
      initialKodikPlayerStore={initialKodikPlayerStore}
    >
      <KodikPlayer />
    </KodikPlayerStoresProvider>
  )
}

export default memo(Root)
