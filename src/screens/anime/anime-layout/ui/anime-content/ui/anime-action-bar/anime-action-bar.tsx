'use client'

import { useParams } from 'next/navigation'

import { AnimeFavoriteButton } from '@/entities/anime/anime-favorite'
import { AnimeListButton } from '@/entities/anime/anime-list'
import { AnimeRateButton } from '@/entities/anime/anime-rating'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery } from '@/services/queries'

import './anime-action-bar.css'

export const AnimeActionBar = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const { data } = useAnimeQuery(animeUrl)

  return (
    <div className='anime-action-bar'>
      <AnimeFavoriteButton animeUrl={animeUrl} />
      <AnimeRateButton animeUrl={animeUrl} rating={data?.rating ?? 0} />
      <AnimeListButton animeUrl={animeUrl} />
    </div>
  )
}
