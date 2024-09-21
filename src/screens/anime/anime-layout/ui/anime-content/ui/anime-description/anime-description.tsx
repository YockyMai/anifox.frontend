'use client'

import { useParams } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { UnstyledButton } from '@/common/components'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery } from '@/services/queries'

import { SHOW_MORE_BUTTON_HEIGHT } from './anime-description.const'
import './anime-description.css'

export const AnimeDescription = () => {
  const { animeUrl } = useParams<AnimePageParams>()!

  const containerRef = useRef<HTMLDivElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)

  const [containerHeight, setContainerHeight] = useState(0)
  const [textHeight, setTextHeight] = useState<number | null>(null)
  const [textInBounds, setTextInBounds] = useState(false)

  const [isFullTextDisplayed, setIsFullTextDisplayed] = useState(false)

  useLayoutEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.clientHeight)
    }
  }, [])

  useEffect(() => {
    if (descriptionRef.current && containerHeight > 0) {
      const textInBounds =
        containerHeight >=
        descriptionRef.current.clientHeight - SHOW_MORE_BUTTON_HEIGHT

      setTextInBounds(textInBounds)

      if (!textInBounds) {
        setTextHeight(containerHeight - SHOW_MORE_BUTTON_HEIGHT)
      }
    }
  }, [containerHeight])

  const { data } = useAnimeQuery(animeUrl)

  if (!data?.description) return null

  return (
    <div ref={containerRef} className='anime-description'>
      <div
        style={{ maxHeight: isFullTextDisplayed ? '100%' : containerHeight }}
      >
        <p
          style={{
            maxHeight: textHeight && !isFullTextDisplayed ? textHeight : '100%'
          }}
          ref={descriptionRef}
          className='anime-description__text'
        >
          {data?.description}
        </p>
        {!textInBounds && (
          <UnstyledButton
            onClick={() => setIsFullTextDisplayed((prev) => !prev)}
            className='anime-description__show-more-button'
          >
            {isFullTextDisplayed ? 'Скрыть' : 'Показать еще'}
          </UnstyledButton>
        )}
      </div>
    </div>
  )
}
