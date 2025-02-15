import { HoverCard, Image } from '@anifox/ui'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { AnimeCardPanel } from '../anime-card-panel'
import './anime-card.css'
import { AnimeCardProps } from './anime-card.interface'

export const AnimeCard = ({ anime, label, withoutPanel }: AnimeCardProps) => {
  return (
    <div className='relative w-full'>
      {withoutPanel ? (
        <Trigger anime={anime} label={label} />
      ) : (
        <HoverCard
          width={280}
          closeDelay={80}
          position='right'
          unstyled
          triggerClassName='anime-card__tooltip-trigger'
          trigger={<Trigger anime={anime} label={label} />}
        >
          {!withoutPanel && <AnimeCardPanel anime={anime} />}
        </HoverCard>
      )}
    </div>
  )
}

const Trigger = ({ anime, label }: AnimeCardProps) => {
  return (
    <div className='anime-card'>
      <div className='anime-card__image'>
        <Link to={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}>
          <div className='anime-card__image__element'>
            <Image src={anime.image.medium} alt='Изображение отсутсвует' />
          </div>
        </Link>

        {label && (
          <div className='anime-card__label'>
            <p>{label}</p>
          </div>
        )}
      </div>
      <Link
        title={anime.title}
        className='anime-card__title'
        to={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}
      >
        {anime.title}
      </Link>
    </div>
  )
}
