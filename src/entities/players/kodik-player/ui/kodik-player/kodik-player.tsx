'use client'

import clsx from 'clsx'
import { Provider, useAtomValue } from 'jotai'
import { memo, useRef } from 'react'

import { getPlayerLinkFromParams } from '../../helpers/get-player-link-from-params'
import { useInitKodikPlayer } from '../../hooks'
import { $kodikPlayerAtoms } from '../../store/kodik-player'
import { KODIK_TABS } from '../../store/kodik-player/kodik-player.const'
import { KodikSidebar } from '../kodik-sidebar'
import './kodik-player.css'
import { KodikPlayerProps } from './kodik-player.interface'

const KodikPlayer = ({ animeUrl }: KodikPlayerProps) => {
  const kodikPlayerRef = useRef<HTMLIFrameElement>(null)

  const selectedTab = useAtomValue($kodikPlayerAtoms.activeTab)
  const selectedTranslation = useAtomValue(
    $kodikPlayerAtoms.selectedTranslationAtom
  )

  useInitKodikPlayer({ animeUrl })

  return (
    <div className='kodik-player'>
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

const Root = ({ animeUrl }: KodikPlayerProps) => {
  return (
    <Provider>
      <KodikPlayer animeUrl={animeUrl} />
    </Provider>
  )
}

export default memo(Root)
