'use client'

import { useParams } from 'next/navigation'

import { KodikPlayer } from '@/entities/players/kodik-player'

import { AnimePageParams } from '../anime.interface'

export const AnimeWatchScreen = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  return (
    <div>
      <KodikPlayer animeUrl={animeUrl} />
    </div>
  )
}
