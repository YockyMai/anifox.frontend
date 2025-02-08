import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router'

export const WithReactRouterProvider = ({
  children
}: {
  children: ReactNode
}) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
