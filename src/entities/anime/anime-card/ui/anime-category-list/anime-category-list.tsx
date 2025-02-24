import { useMemo } from 'react'
import { Link } from 'react-router'

import { AnimeCard } from '../anime-card'
import { AnimeCardSkeleton } from '../anime-card-skeleton'
import { AnimeCategoryListProps } from './anime-category-list.interface'

export const AnimeCategoryList = ({
  category,
  categoryLink,
  items,
  icon,
  isLoading
}: AnimeCategoryListProps) => {
  const loaders = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, index) => (
        <AnimeCardSkeleton key={index} />
      )),
    []
  )
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-between pb-3'>
        <div className='flex items-center gap-x-2'>
          {icon}
          <p>{category}</p>
        </div>

        {categoryLink && (
          <Link className='text-sm sm:text-base' to={categoryLink}>
            Показать все
          </Link>
        )}
      </div>
      <div className='anifox-grid'>
        {isLoading ? (
          loaders
        ) : (
          <>
            {items.map((anime) => (
              <AnimeCard anime={anime} key={anime.url} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}
