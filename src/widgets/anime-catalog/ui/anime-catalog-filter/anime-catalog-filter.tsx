import { clsx } from 'clsx'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

import { $headerAtoms } from '@/widgets/header/store'

import { AnimeCatalogFilterContext } from '../../context/anime-catalog-filter.context'
import { useChangeSearchParams } from '../../hooks'
import './anime-catalog-filter.css'
import { AnimeOrder } from './ui'
import { AnimeFilters } from './ui'
import { CarouselFilters } from './ui/carousel-filters/carousel-filters'

export const AnimeCatalogFilter = () => {
  const headerIsVisible = useAtomValue($headerAtoms.isVisible)

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
        suppressHydrationWarning
        className={clsx(
          'anime-catalog-filter',
          isSticky && 'anime-catalog-filter_sticky',
          !headerIsVisible && 'anime-catalog-filter_without-header'
        )}
      >
        <div className='2xl:hidden'>
          <CarouselFilters />
        </div>
        <div className='hidden 2xl:block'>
          <div className='anime-catalog-filter__container'>
            <div className='anime-catalog-filter__left-section'>
              <AnimeOrder />
              <AnimeFilters />
            </div>
          </div>
        </div>
      </div>
    </AnimeCatalogFilterContext.Provider>
  )
}
