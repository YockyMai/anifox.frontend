import { useParams } from 'react-router'

import { AnimeFavoriteButton } from '@/entities/anime/anime-favorite'
import { AnimeListButton } from '@/entities/anime/anime-list'
import { AnimeRateButton } from '@/entities/anime/anime-rating'
import { $viewer } from '@/entities/viewer'
import { useAnimeQuery } from '@/graphql/generated/output'
import { AnimePageParams } from '@/screens/anime/anime.interface'

export const AnimeActionBar = () => {
  const { animeId, animeUrl } = useParams<AnimePageParams>()!

  const viewer = $viewer.selectors.viewer()

  const { data } = useAnimeQuery({
    variables: {
      url: animeUrl!,
      userId: viewer?.id
    }
  })

  return (
    <div className='flex gap-2 max-lg:w-full max-lg:justify-center'>
      <AnimeFavoriteButton animeUrl={animeUrl!} />
      <AnimeRateButton
        animeUrl={animeUrl!}
        animeId={animeId!}
        rating={data?.anime.userRating?.rating}
      />
      <AnimeListButton
        animeUrl={animeUrl!}
        currentAnimeListStatus={data?.anime.animeListEntry?.status}
      />
    </div>
  )
}
