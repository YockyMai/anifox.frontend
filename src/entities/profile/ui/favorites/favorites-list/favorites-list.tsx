import { InfinityLoadingContainer, Loader } from '@anifox/ui'
import { IconMoodSad } from '@tabler/icons-react'
import React from 'react'

import { FavoriteCard } from '@/entities/favorites'
import { FavoritesFilterView } from '@/entities/profile/store/favorites-filter'

import { FavoritesListProps } from './favorites-list.interface'

export const FavoritesList = ({
  data,
  fetchNextPage,
  loading,
  view,
  pageInfo
}: FavoritesListProps) => {
  return (
    <div className='h-fit overflow-hidden rounded bg-white dark:bg-slate-800'>
      <div className='flex select-none items-center justify-between p-3'>
        <div className='flex-[5]'>
          <p className='font-bold'>
            Избранные{' '}
            {view === FavoritesFilterView.ANIMES ? 'аниме' : 'персонажи'}
          </p>
        </div>
        <div className='flex-1'>
          <p className='text-center font-bold'>В списке</p>
        </div>
        <div className='flex-1'>
          <p className='text-center font-bold'>Действие</p>
        </div>
      </div>
      <div className='dark:bg-slate-800'>
        {!loading && data.length === 0 && (
          <div className='flex items-center justify-center gap-x-2 p-10'>
            <p>
              Список избранных{' '}
              {view === FavoritesFilterView.ANIMES ? 'аниме' : 'персонажей'}{' '}
              пуст
            </p>
            <IconMoodSad />
          </div>
        )}
        <InfinityLoadingContainer
          hasNextPage={pageInfo?.hasNextPage ?? true}
          isFetchingNextPage={loading && !!pageInfo}
          fetchNextPage={fetchNextPage}
        >
          {data.map(({ count, image, title, to, key }) => (
            <FavoriteCard
              count={count}
              key={key}
              to={to}
              image={image}
              title={title}
            />
          ))}
        </InfinityLoadingContainer>

        {loading && (
          <div className='flex items-center justify-center'>
            <Loader />
          </div>
        )}
      </div>
    </div>
  )
}
