import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'

const client = new QueryClient()
export const withReactQuery = (component: () => ReactNode) => {
  return () => (
    <QueryClientProvider client={client}>{component()}</QueryClientProvider>
  )
}
