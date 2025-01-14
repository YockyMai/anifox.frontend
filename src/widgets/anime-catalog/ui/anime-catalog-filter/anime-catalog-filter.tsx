'use client'

import { clsx } from 'clsx'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

import { $windowAtoms } from '@/common/store/window'
import { $headerAtoms } from '@/widgets/header/store'

import { AnimeCatalogFilterContext } from '../../context/anime-catalog-filter.context'
import { useChangeSearchParams } from '../../hooks'
import './anime-catalog-filter.css'
import { AnimeOrder } from './ui'
import { AnimeFilters } from './ui'
import { CarouselFilters } from './ui/carousel-filters/carousel-filters'

export const AnimeCatalogFilter = () => {
  const windowWidth = useAtomValue($windowAtoms.windowWidth)
  const headerIsVisible = useAtomValue($headerAtoms.isVisible)

  const canUseSlider = windowWidth <= 1500

  const [isSticky, setIsSticky] = useState(
    typeof window !== 'undefined' ? window.scrollY : 0 >= 100
  )

  const changeSearchParams = useChangeSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const onScroll = () => {
        setIsSticky(window.scrollY >= 100)
      }

      window.addEventListener('scroll', onScroll)

      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [])

  return (
    <AnimeCatalogFilterContext.Provider value={{ changeSearchParams }}>
      <div
        className={clsx(
          'anime-catalog-filter',
          isSticky && 'anime-catalog-filter_sticky',
          !headerIsVisible && 'anime-catalog-filter_without-header'
        )}
      >
        {canUseSlider ? (
          <CarouselFilters />
        ) : (
          <div className='anime-catalog-filter__container'>
            <div className='anime-catalog-filter__left-section'>
              <AnimeOrder />
              <AnimeFilters />
            </div>
          </div>
        )}
      </div>
    </AnimeCatalogFilterContext.Provider>
  )
}
