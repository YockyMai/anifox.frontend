import { ProvidersProps } from './providers.interface'
import { WithAuthProvider } from './with-auth-provider'
import { WithNextIntlClientProvider } from './with-next-intl-client-provider'
import { WithReactQueryProvider } from './with-react-query-provider'
import { WithSiteTheme } from './with-site-theme'
import { WithWindowProvider } from './with-window-provider'

export const Providers = ({ children, locale }: ProvidersProps) => {
  return (
    <WithNextIntlClientProvider locale={locale}>
      <WithReactQueryProvider>
        <WithAuthProvider>
          <WithWindowProvider>
            <WithSiteTheme>{children}</WithSiteTheme>
          </WithWindowProvider>
        </WithAuthProvider>
      </WithReactQueryProvider>
    </WithNextIntlClientProvider>
  )
}
