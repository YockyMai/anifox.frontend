'use client'

import clsx from 'clsx'
import { Provider, useAtomValue } from 'jotai'
import { memo, useRef } from 'react'

import { getPlayerLinkFromParams } from '../../helpers/get-player-link-from-params'
import { useInitKodikPlayer } from '../../hooks'
import { $kodikPlayerAtoms } from '../../store/kodik-player'
import { KodikPlayerHeader } from '../kodik-player-header/kodik-player-header'
import './kodik-player.css'
import { KodikPlayerProps } from './kodik-player.interface'

const KodikPlayer = ({ animeUrl }: KodikPlayerProps) => {
  const kodikPlayerRef = useRef<HTMLIFrameElement>(null)

  const selectedTranslation = useAtomValue(
    $kodikPlayerAtoms.selectedTranslationAtom
  )
  const isWideMode = useAtomValue($kodikPlayerAtoms.isWideMode)

  useInitKodikPlayer({ animeUrl })

  return (
    <div className='kodik-player-container'>
      <KodikPlayerHeader />

      <div
        className={clsx(
          'kodik-player-container__frame',
          `kodik-player-container__frame__${isWideMode ? 'wide' : 'default'}`
        )}
      >
        {selectedTranslation && (
          <iframe
            ref={kodikPlayerRef}
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
