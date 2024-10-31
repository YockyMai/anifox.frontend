import { Provider } from 'jotai'
import { ReactNode } from 'react'

export const WithJotaiProvider = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>
}
