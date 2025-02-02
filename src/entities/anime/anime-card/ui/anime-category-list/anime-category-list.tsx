import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { AnimeCard } from '../anime-card'
import { AnimeCardSkeleton } from '../anime-card-skeleton'
import './anime-category-list.css'
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
    <div className='anime-category-list'>
      <div className='anime-category-list__header'>
        <div className='anime-category-list__category'>
          {icon}
          <p>{category}</p>
        </div>

        {categoryLink && <Link to={categoryLink}>Показать все</Link>}
      </div>
      <div className='anime-category-list__content'>
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
