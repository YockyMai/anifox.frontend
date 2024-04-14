import { ReactNode } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export const withHelmetProvider = (component: () => ReactNode) => () => (
  <HelmetProvider>
    <Helmet titleTemplate="ANIFOX | %s" defaultTitle="ANIFOX" />
    {component()}
  </HelmetProvider>
)
