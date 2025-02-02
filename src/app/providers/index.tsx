import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { WithAuthProvider } from './with-auth-provider'
import { WithReactQueryProvider } from './with-react-query-provider'
import { WithSiteTheme } from './with-site-theme'
import { WithWindowProvider } from './with-window-provider'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <WithReactQueryProvider>
        <WithAuthProvider>
          <WithWindowProvider>
            <WithSiteTheme>{children}</WithSiteTheme>
          </WithWindowProvider>
        </WithAuthProvider>
      </WithReactQueryProvider>
    </BrowserRouter>
  )
}
