import { ProgressBar } from '@anifox/ui'

import './suspense-page-loader.css'

export const SuspensePageLoader = () => {
  return (
    <div className={'page-loader'}>
      <img
        alt={'logo'}
        src={'/anifox-logo-text.webp'}
        className={'page-loader__image'}
      />
      <ProgressBar animationDuration={100} />
    </div>
  )
}
