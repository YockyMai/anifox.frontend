import compose from 'compose-function'

import { withHelmetProvider } from './with-helmet-provider.tsx'
import { withI18nProvider } from './with-i18n-provider.tsx'
import { withReactQuery } from './with-react-query.tsx'
import { withResizeObserver } from './with-resize-observer.tsx'
import { withRouter } from './with-router.tsx'
import { withThemeProvider } from './with-theme-provider.tsx'

export const withProviders = compose(
  withI18nProvider,
  withHelmetProvider,
  withThemeProvider,
  withRouter,
  withReactQuery,
  withResizeObserver
)
