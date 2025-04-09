import { motion } from 'framer-motion'

import { $animeList, $animeListFilters } from '../../store'
import { AnimeListFilters } from './anime-list-filters'
import { AnimeListTableHeader } from './anime-list-table-header'
import { AnimeListTable } from './anime-list-table/anime-list-table'

export const AnimeList = () => {
  const selectedTrackStatus = $animeListFilters.selectors.trackStatus()
  const statuses = $animeList.selectors.rows()

  return (
    <div className='gap-x-12 xl:grid xl:grid-cols-[250px_auto]'>
      <AnimeListFilters />
      <div className='flex flex-col gap-y-12'>
        {selectedTrackStatus ? (
          <div>
            <AnimeListTableHeader status={selectedTrackStatus} />
            <AnimeListTable status={selectedTrackStatus} />
          </div>
        ) : (
          <>
            {/* {statuses.map((status) => (
              <motion.div layout key={status}>
                <AnimeListTableHeader withReorder status={status} />
                <AnimeListTable status={status} />
              </motion.div>
            ))} */}
          </>
        )}
      </div>
    </div>
  )
}
