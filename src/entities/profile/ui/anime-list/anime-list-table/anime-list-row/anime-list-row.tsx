import { Reorder, useDragControls } from 'framer-motion'
import React from 'react'

import { AnimeStatusCard } from '@/entities/anime/anime-card/ui'

import { DraggableAnimeCardProps } from './anime-list-row.interface'

export const AnimeListRow = ({
  anime,
  status,
  isDragging,
  onDragChange
}: DraggableAnimeCardProps) => {
  const dragControls = useDragControls()

  return (
    <Reorder.Item
      onDragEnd={() => onDragChange(false, anime.url)}
      onDragStart={() => onDragChange(true, anime.url)}
      dragListener={false}
      dragControls={dragControls}
      value={anime}
    >
      <div className='transition-colors hover:bg-slate-100'>
        <AnimeStatusCard
          dragControls={dragControls}
          anime={anime}
          status={status}
          isDragging={isDragging}
        />
      </div>
    </Reorder.Item>
  )
}
