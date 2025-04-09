import { ApolloProvider } from '@apollo/client'
import { connectApolloClientToVSCodeDevTools } from '@apollo/client-devtools-vscode'
import { ReactNode } from 'react'

import { client } from '@/graphql/client'

if (import.meta.env.DEV) {
  const vsCodeDevtoolsUrl = import.meta.env.VITE_PUBLIC_VS_CODE_DEVTOOLS_URL

  if (vsCodeDevtoolsUrl) {
    connectApolloClientToVSCodeDevTools(client, vsCodeDevtoolsUrl)
  }
}

export const WithApolloClientProvider = ({
  children
}: {
  children: ReactNode
}) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
