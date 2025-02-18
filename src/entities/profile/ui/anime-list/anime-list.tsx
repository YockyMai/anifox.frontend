import { Reorder } from 'framer-motion'
import React from 'react'

import { $animeList } from '../../store'
import { AnimeListTable } from './anime-list-table/anime-list-table'

export const AnimeList = () => {
  const statuses = $animeList.selectors.rows()

  return (
    <Reorder.Group
      axis='y'
      onReorder={(reordered) => $animeList.actions.reorder(reordered)}
      values={statuses}
    >
      <div className='flex flex-col gap-y-12'>
        {statuses.map((status) => (
          <AnimeListTable key={status} status={status} />
        ))}
      </div>
    </Reorder.Group>
  )
}
