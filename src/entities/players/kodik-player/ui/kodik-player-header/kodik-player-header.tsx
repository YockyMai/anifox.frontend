import clsx from 'clsx'
import { useAtomValue } from 'jotai'

import { $kodikPlayerAtoms } from '../../store/kodik-player'
import './kodik-player-header.css'
import { Episodes, Translations, Actions } from './ui'

export const KodikPlayerHeader = () => {
  const isWideMode = useAtomValue($kodikPlayerAtoms.isWideMode)

  return (
    <div
      className={clsx(
        'kodik-player__header',
        isWideMode && 'kodik-player__header--wide'
      )}
    >
      <div className='kodik-player__header__selectors'>
        <Episodes />
        <Translations />
      </div>
      <div className='kodik-player__header__actions'>
        <Actions />
      </div>
    </div>
  )
}
