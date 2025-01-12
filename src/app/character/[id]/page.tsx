import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from '@tanstack/react-query'

import { CharacterScreen } from '@/screens/character'
import { usePrefetchCharacterQuery } from '@/services/queries'

const Character = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient()

  await usePrefetchCharacterQuery(params.id, queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CharacterScreen />
    </HydrationBoundary>
  )
}

export default Character
