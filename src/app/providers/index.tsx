import { ReactNode } from 'react'

import { WithApolloClientProvider } from './with-apollo-client-provider'
import { WithAuthProvider } from './with-auth-provider'
import { WithReactHelmetProvider } from './with-react-helmet-provider'
import { WithReactQueryProvider } from './with-react-query-provider'
import { WithReactRouterProvider } from './with-react-router-provider'
import { WithSiteTheme } from './with-site-theme'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WithApolloClientProvider>
      <WithReactHelmetProvider>
        <WithReactRouterProvider>
          <WithReactQueryProvider>
            <WithAuthProvider>
              <WithSiteTheme>{children}</WithSiteTheme>
            </WithAuthProvider>
          </WithReactQueryProvider>
        </WithReactRouterProvider>
      </WithReactHelmetProvider>
    </WithApolloClientProvider>
  )
}
