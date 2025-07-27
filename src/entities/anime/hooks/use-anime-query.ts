import { $viewer } from '@/entities/viewer'
import { useAnimeQuery as useGraphqlAnimeQuery } from '@/graphql/generated/output'

export const useAnimeQuery = (animeUrl: string) => {
  const viewer = $viewer.selectors.viewer()

  return useGraphqlAnimeQuery({
    variables: {
      url: animeUrl,
      userId: viewer?.id
    }
  })
}
