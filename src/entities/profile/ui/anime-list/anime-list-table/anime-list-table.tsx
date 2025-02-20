import { Loader } from '@anifox/ui'

import { useIsAnimeListFilterActive } from '@/entities/profile/store'

import { useFilteredUserAnimeList } from '../../../hooks'
import { AnimeListColumns } from './anime-list-columns'
import { AnimeListRow } from './anime-list-row'
import { AnimeListTableProps } from './anime-list-table.interface'

export const AnimeListTable = ({ status }: AnimeListTableProps) => {
  const isFilterActive = useIsAnimeListFilterActive()
  const { list, isLoading } = useFilteredUserAnimeList(status)

  return (
    <div className='rounded bg-white drop-shadow-2xl dark:bg-slate-800'>
      <AnimeListColumns status={status} />

      <div>
        {list.length && !isLoading ? (
          <>
            {list.map((anime) => (
              <AnimeListRow status={status} key={anime.url} anime={anime} />
            ))}
          </>
        ) : (
          <div className='flex items-center justify-center pb-8'>
            {isLoading ? (
              <Loader />
            ) : (
              <p>{isFilterActive ? 'Ничего не найдено' : 'Список пуст'}</p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
