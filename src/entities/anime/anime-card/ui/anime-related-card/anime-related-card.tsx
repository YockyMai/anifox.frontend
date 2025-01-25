import { IconStar } from '@tabler/icons-react'
import clsx from 'clsx'

import { Image, MarqueeText } from '@/common/components'
import { Badge } from '@/common/components'
import { UIColors } from '@/common/types/ui-colors'
import { Link } from '@/i18n/routing'
import { ROUTES } from '@/screens/pages.routes'

import './anime-related-card.css'
import { AnimeSimilarCardProps } from './anime-related-card.interface'

export const AnimeRelatedCard = ({
  anime,
  relation
}: AnimeSimilarCardProps) => {
  return (
    <div className='anime-related-card'>
      <Link href={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}>
        <Image
          width={60}
          height={130}
          src={anime.image.medium}
          alt={anime.title}
        />
      </Link>

      <div className='anime-related-card__body'>
        <MarqueeText>
          <p>{anime.title}</p>
        </MarqueeText>
        <div className='anime-related-card__rating'>
          {Array.from({ length: 10 }, (_, index) => (
            <IconStar
              size={12}
              key={index}
              className={clsx(
                (anime.rating ?? 0) <= index + 1 &&
                  'fill-yellow-300 stroke-yellow-300'
              )}
            />
          ))}
        </div>
        <div className='anime-related-card__info'>
          <Badge color={UIColors.PURPLE}>{relation.type}</Badge>

          {anime.year && (
            <Badge color={UIColors.GREEN}>Год выхода: {anime.year} г.</Badge>
          )}
        </div>
      </div>
    </div>
  )
}
