'use client'

import { clsx } from 'clsx'
import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

import { $headerAtoms } from '@/widgets/header/store'

import './anime-catalog-filter.css'
import { AnimeOrder } from './ui'
import { AnimeFilters } from './ui'

export const AnimeCatalogFilter = () => {
  const [headerIsVisible] = useAtom($headerAtoms.isVisible)

  const [isSticky, setIsSticky] = useState(
    typeof window !== 'undefined' ? window.scrollY : 0 >= 100
  )

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
