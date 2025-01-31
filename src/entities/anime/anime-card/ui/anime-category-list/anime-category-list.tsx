import Badge from '@/common/components/badge/badge'
import { Link } from '@/i18n/routing'

import { AnimeCard } from '../anime-card'
import './anime-category-list.css'
import { AnimeCategoryListProps } from './anime-category-list.interface'

export const AnimeCategoryList = ({
  category,
  categoryLink,
  items,
  icon
}: AnimeCategoryListProps) => {
  return (
    <div className='anime-category-list'>
      <div className='anime-category-list__header'>
        <div className='anime-category-list__category'>
          {icon}
          <p>{category}</p>
        </div>

        {categoryLink && <Link href={categoryLink}>Показать все</Link>}
      </div>
      <div className='anime-category-list__content'>
        {items.map((anime) => (
          <AnimeCard anime={anime} key={anime.url} />
        ))}
      </div>
    </div>
  )
}
