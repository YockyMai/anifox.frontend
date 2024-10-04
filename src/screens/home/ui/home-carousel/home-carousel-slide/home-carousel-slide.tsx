'use client'

import { IconCalendarMonth, IconPlayerPlayFilled } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React, { useMemo } from 'react'

import { Badge, Button, Image } from '@/common/components'
import { UISizes } from '@/common/types/ui-sizes'
import { getAnimeAccentColorStyles } from '@/entities/anime/anime-card/helpers'

import { animations } from './home-carousel-slide.animations'
import { POSTER_IMAGE_SIZE } from './home-carousel-slide.const'
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
        <Image
          alt={anime.title}
          className='home-carousel-slide__image'
          src={anime.image.cover}
        />
      </div>
      <div className='home-carousel-slide__container'>
        <div />

        <motion.div
          initial={animations.initial}
          whileInView={animations.whileInView}
          transition={{ delay: 0.3 }}
          className='home-carousel-slide__content'
        >
          <Image
            alt='anime poster'
            width={POSTER_IMAGE_SIZE.WIDTH}
            height={POSTER_IMAGE_SIZE.HEIGHT}
            src={anime.image.medium}
          />
          <div className='home-carousel-slide__content__info'>
            <p className='home-carousel-slide__content__info__title'>
              {anime.title}
            </p>
            <div className='flex gap-1'>
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
            <div className='flex items-center gap-1'>
              <Badge size='sm'>
                <div className='flex'>
                  <IconCalendarMonth size={20} />
                </div>
              </Badge>
            </div>
          </div>
        </motion.div>

        <div className='home-carousel-slide__buttons'>
          <motion.div
            transition={{ delay: 0.6 }}
            initial={animations.initial}
            whileInView={animations.whileInView}
          >
            <Button
              variant='blur'
              icon={<IconPlayerPlayFilled />}
              size={UISizes.LG}
              color='orange'
              radius={UISizes.XXL}
            >
              Смотреть
            </Button>
          </motion.div>
          <motion.div
            transition={{ delay: 0.7 }}
            initial={animations.initial}
            whileInView={animations.whileInView}
          >
            <Button size={UISizes.LG} color='green' radius={UISizes.XXL}>
              На страницу аниме
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
