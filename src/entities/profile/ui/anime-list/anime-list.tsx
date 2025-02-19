import { motion } from 'framer-motion'
import React from 'react'

import { $animeList, $animeListFilters } from '../../store'
import { AnimeListFilters } from './anime-list-filters'
import { AnimeListTableHeader } from './anime-list-table-header'
import { AnimeListTable } from './anime-list-table/anime-list-table'

export const AnimeList = () => {
  const selectedStatus = $animeListFilters.selectors.status()
  const statuses = $animeList.selectors.rows()

  return (
    <div>
      <AnimeListFilters />
      <div className='flex flex-col gap-y-12'>
        {selectedStatus ? (
          <div>
            <AnimeListTableHeader status={selectedStatus} />
            <AnimeListTable status={selectedStatus} />
          </div>
        ) : (
          <>
            {statuses.map((status) => (
              <motion.div layout key={status}>
                <AnimeListTableHeader withReorder status={status} />
                <AnimeListTable withReorder status={status} />
              </motion.div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
