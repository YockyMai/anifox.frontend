import { ReactNode } from 'react'

import { WithAuthProvider } from './with-auth-provider'
import { WithJotaiProvider } from './with-jotai-provider'
import { WithReactQueryProvider } from './with-react-query-provider'
import { WithThemeProvider } from './with-theme-provider'
import { WithWindowProvider } from './with-window-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WithJotaiProvider>
      <WithReactQueryProvider>
        <WithAuthProvider>
          <WithThemeProvider>
            <WithWindowProvider>{children}</WithWindowProvider>
          </WithThemeProvider>
        </WithAuthProvider>
      </WithReactQueryProvider>
    </WithJotaiProvider>
  )
}
