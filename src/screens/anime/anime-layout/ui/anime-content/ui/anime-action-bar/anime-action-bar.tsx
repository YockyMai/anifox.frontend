import { useParams } from 'react-router'

import { AnimeFavoriteButton } from '@/entities/anime/anime-favorite'
import { AnimeListButton } from '@/entities/anime/anime-list'
import { AnimeRateButton } from '@/entities/anime/anime-rating'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery } from '@/services/queries'

export const AnimeActionBar = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery(animeUrl!)

  return (
    <div className='flex gap-2 max-lg:w-full max-lg:justify-center'>
      <AnimeFavoriteButton animeUrl={animeUrl!} />
      <AnimeRateButton animeUrl={animeUrl!} rating={data?.user?.rating} />
      <AnimeListButton
        animeUrl={animeUrl!}
        currentTrackStatus={data?.user?.list}
      />
    </div>
  )
}
