import { Provider, useAtomValue } from 'jotai'
import { ForwardedRef, forwardRef, memo, RefObject, useRef } from 'react'

import { getPlayerLinkFromParams } from '../../helpers/get-player-link-from-params'
import { useInitKodikPlayer } from '../../hooks'
import { $kodikPlayerAtoms } from '../../store/kodik-player'
import { KodikSidebar } from '../kodik-sidebar'
import './kodik-player.css'
import { KodikPlayerProps } from './kodik-player.interface'

const KodikPlayer = forwardRef(
  ({ animeUrl }: KodikPlayerProps, ref: ForwardedRef<HTMLDivElement>) => {
    const kodikPlayerRef = useRef<HTMLIFrameElement>(null)

    const selectedTranslation = useAtomValue(
      $kodikPlayerAtoms.selectedTranslationAtom
    )

    useInitKodikPlayer({ animeUrl })

    return (
      <div ref={ref} className='kodik-player'>
        <div className='kodik-player__frame-container'>
          {selectedTranslation && (
            <iframe
              ref={kodikPlayerRef}
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
)

const Root = forwardRef(
  ({ animeUrl }: KodikPlayerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <Provider>
        <KodikPlayer ref={ref} animeUrl={animeUrl} />
      </Provider>
    )
  }
)

export default memo(Root)
