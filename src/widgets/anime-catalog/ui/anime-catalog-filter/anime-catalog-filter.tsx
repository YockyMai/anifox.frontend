import { clsx } from 'clsx'
import { useEffect, useState } from 'react'
import { useStore } from 'zustand'

import { $headerModel } from '@/widgets/header/model/header.model'

import './anime-catalog-filter.css'
import { AnimeFilters, AnimeOrder } from './ui'

export const AnimeCatalogFilter = () => {
  const headerIsVisible = useStore(
    $headerModel.store,
    ({ isVisible }) => isVisible
  )

  const [isSticky, setIsSticky] = useState(window.scrollY >= 100)

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY >= 100)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className={clsx(
        'anime-catalog-filter',
        isSticky && 'anime-catalog-filter_sticky',
        !headerIsVisible && 'anime-catalog-filter_without-header'
      )}
    >
      <div className='anime-catalog-filter__container'>
        <div className='anime-catalog-filter__left-section'>
          <AnimeOrder />
          <AnimeFilters />
        </div>
      </div>
    </div>
  )
}
