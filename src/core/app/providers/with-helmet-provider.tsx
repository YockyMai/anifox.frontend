import { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export const withHelmetProvider = (component: () => ReactNode) => () => (
  <HelmetProvider>
    <Helmet titleTemplate='%s | ANIFOX' defaultTitle='ANIFOX' />
    {component()}
  </HelmetProvider>
)
