import React from 'react'

import { AnimeStatusCard } from '@/entities/anime/anime-card/ui'

import { DraggableAnimeCardProps } from './anime-list-row.interface'

export const AnimeListRow = ({ anime, status }: DraggableAnimeCardProps) => {
  return <AnimeStatusCard anime={anime} status={status} />
}
