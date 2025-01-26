import { Link } from '@/i18n/routing'

import './anime-info-block.css'
import { AnimeInfoBlockProps } from './anime-info-block.interface'

export const AnimeInfoBlock = ({ infos, title }: AnimeInfoBlockProps) => {
  return (
    <div className='anime-info-block'>
      <p className='anime-info-block__title'>{title}</p>

      <div className='anime-info-block__container'>
        {infos.map(({ element, href, key }, index) =>
          href ? (
            <Link
              href={href}
              key={key ?? index}
              className='anime-info-block__item'
            >
              {element}
            </Link>
          ) : (
            <div key={key ?? index} className='anime-info-block__item'>
              {element}
            </div>
          )
        )}
      </div>
    </div>
  )
}
