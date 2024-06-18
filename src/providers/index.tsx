import { ReactNode } from 'react'

import { WithReactQueryProvider } from './with-react-query-provider'
import { WithThemeProvider } from './with-theme-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WithThemeProvider>
      <WithReactQueryProvider>{children}</WithReactQueryProvider>
    </WithThemeProvider>
  )
}
