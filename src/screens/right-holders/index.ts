import { lazy } from 'react'

export const RightHoldersScreen = lazy(() =>
  import('./right-holders').then(({ RightHoldersScreen }) => ({
    default: RightHoldersScreen
  }))
)
