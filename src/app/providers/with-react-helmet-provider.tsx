import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'

export const WithReactHelmetProvider = ({
  children
}: {
  children: ReactNode
}) => {
  return <HelmetProvider>{children}</HelmetProvider>
}
