import { lazy } from 'react'

export const LoginScreen = lazy(() =>
  import('./login').then(({ LoginScreen }) => ({
    default: LoginScreen
  }))
)
