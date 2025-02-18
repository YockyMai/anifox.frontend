import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router'

import { ScrollToTop } from './scroll-to-top'

export const WithReactRouterProvider = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {children}
    </BrowserRouter>
  )
}
