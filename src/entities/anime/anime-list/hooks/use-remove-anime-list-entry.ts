import { $viewer } from '@/entities/viewer'
import {
  AnimeDocument,
  AnimeListDocument,
  AnimeListStatus,
  useRemoveAnimeListEntryMutation
} from '@/graphql/generated/output'

export const useRemoveAnimeListEntry = (
  animeUrl: string,
  currentAnimeListStatus?: AnimeListStatus
) => {
  const viewer = $viewer.selectors.viewer()

  return useRemoveAnimeListEntryMutation({
    variables: { animeUrl },
    refetchQueries: () => {
      if (!viewer || !currentAnimeListStatus) {
        return []
      }

      return [
        {
          query: AnimeListDocument,
          variables: { userId: viewer.id, status: currentAnimeListStatus }
        },
        {
          query: AnimeDocument,
          variables: {
            animeUrl,
            userId: viewer.id
          }
        }
      ]
    }
  })
}
