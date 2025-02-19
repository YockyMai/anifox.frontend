import { Reorder } from 'framer-motion'
import React, { useState } from 'react'

import { useFilteredUserAnimeList } from '../../../hooks'
import { AnimeListColumns } from './anime-list-columns'
import { AnimeListRow } from './anime-list-row'
import { AnimeListTableProps } from './anime-list-table.interface'

export const AnimeListTable = ({ status }: AnimeListTableProps) => {
  const [draggedAnime, setDraggedAnime] = useState('')

  const data = useFilteredUserAnimeList(status)

  return (
    <div className='overflow-hidden rounded bg-white drop-shadow-2xl'>
      <AnimeListColumns status={status} />

      <div>
        {data.length ? (
          <Reorder.Group
            axis='y'
            values={data}
            onReorder={() => {
              console.log('reorder')
            }}
          >
            {data.map((anime) => (
              <AnimeListRow
                onDragChange={(isDragging, animeUrl) => {
                  if (isDragging) {
                    setDraggedAnime(animeUrl)
                  } else {
                    setDraggedAnime('')
                  }
                }}
                isDragging={draggedAnime === anime.url}
                status={status}
                key={anime.url}
                anime={anime}
              />
            ))}
          </Reorder.Group>
        ) : (
          <div className='flex items-center justify-center py-5'>
            <p className='font-bold'>У вас пока нет аниме в этом списке.</p>
          </div>
        )}
      </div>
    </div>
  )
}
