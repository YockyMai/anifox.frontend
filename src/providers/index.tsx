import { ReactNode } from 'react'

import { WithJotaiProvider } from './with-jotai-provider'
import { WithReactQueryProvider } from './with-react-query-provider'
import { WithThemeProvider } from './with-theme-provider'
import { WithWindowProvider } from './with-window-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WithJotaiProvider>
      <WithReactQueryProvider>
        <WithThemeProvider>
          <WithWindowProvider>{children}</WithWindowProvider>
        </WithThemeProvider>
      </WithReactQueryProvider>
    </WithJotaiProvider>
  )
}
