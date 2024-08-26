import { useParams } from 'next/navigation'
import React from 'react'

import { KodikPlayer } from '@/entities/players/kodik-player'

import { AnimePageParams } from '../../anime.interface'
import './anime-player.css'

export const AnimePlayer = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  return (
    <div className='anime-player-container'>
      <div className='container mx-auto'>
        <KodikPlayer animeUrl={animeUrl} />
      </div>
    </div>
  )
}
