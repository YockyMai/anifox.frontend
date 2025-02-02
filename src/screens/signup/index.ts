import { lazy } from 'react'

export const SignupScreen = lazy(() =>
  import('./signup').then(({ SignupScreen }) => ({
    default: SignupScreen
  }))
)
