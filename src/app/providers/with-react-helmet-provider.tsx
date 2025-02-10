import { ReactNode } from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { Helmet } from '@/common/components'

export const WithReactHelmetProvider = ({
  children
}: {
  children: ReactNode
}) => {
  return <HelmetProvider>{children}</HelmetProvider>
}
