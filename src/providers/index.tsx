import { ReactNode } from 'react'

import { WithAuthProvider } from './with-auth-provider'
import { WithJotaiProvider } from './with-jotai-provider'
import { WithReactQueryProvider } from './with-react-query-provider'
import { WithSiteTheme } from './with-site-theme'
import { WithWindowProvider } from './with-window-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WithJotaiProvider>
      <WithReactQueryProvider>
        <WithAuthProvider>
          <WithWindowProvider>
            <WithSiteTheme>{children}</WithSiteTheme>
          </WithWindowProvider>
        </WithAuthProvider>
      </WithReactQueryProvider>
    </WithJotaiProvider>
  )
}
