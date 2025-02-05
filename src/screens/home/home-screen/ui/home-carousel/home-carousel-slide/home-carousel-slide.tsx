import { IconHeartFilled, IconPlayerPlayFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { Link } from 'react-router'

import { Button, Image, MarqueeText } from '@/common/components'
import { UISizes } from '@/common/types/ui-sizes'
import { getAnimeAccentColorStyles } from '@/entities/anime/anime-card/helpers'
import { ROUTES } from '@/screens/pages.routes'

import { animations } from './home-carousel-slide.animations'
import './home-carousel-slide.css'
import { HomeCarouselSlideProps } from './home-carousel-slide.interface'

export const HomeCarouselSlide = ({ anime }: HomeCarouselSlideProps) => {
  const genres = useMemo(() => {
    const genres = anime?.genres ? [...anime.genres] : []

    return genres.splice(0, 5)
  }, [anime.genres])

  const accentColor = getAnimeAccentColorStyles(anime.accent_color, 'light')

  return (
    <div className='home-carousel-slide' style={accentColor}>
      <div className='home-carousel-slide__image'>
        <Image alt={anime.title} src={anime.image.cover!} />
      </div>

      <motion.div
        initial={animations.initial}
        whileInView={animations.whileInView}
        transition={{ delay: 0.3 }}
        className='home-carousel-slide__content'
      >
        <div className='home-carousel-slide__content__image'>
          <Image alt='anime poster' src={anime.image.medium} />
        </div>
        <div className='home-carousel-slide__content__info'>
          <MarqueeText>
            <p className='home-carousel-slide__content__info__title'>
              {anime.title}
            </p>
          </MarqueeText>

          <div className='flex flex-wrap gap-1'>
            {genres.map(({ name, id }) => (
              <div
                key={id}
                className='rounded bg-[--card-background-color] px-1.5 py-0.5'
              >
                <p className='text-xs text-[--card-background-text-color]'>
                  {name}
                </p>
              </div>
            ))}
          </div>

          <div className='home-carousel-slide__content__info__buttons'>
            <motion.div
              transition={{ delay: 0.6 }}
              initial={animations.initial}
              whileInView={animations.whileInView}
            >
              <Link
                to={ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', anime.url)}
              >
                <Button
                  icon={<IconPlayerPlayFilled />}
                  size={UISizes.SM}
                  color='orange'
                >
                  Смотреть
                </Button>
              </Link>
            </motion.div>
            <motion.div
              transition={{ delay: 0.7 }}
              initial={animations.initial}
              whileInView={animations.whileInView}
            >
              <Button size={UISizes.SM} color='red' icon={<IconHeartFilled />}>
                В избранное
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
