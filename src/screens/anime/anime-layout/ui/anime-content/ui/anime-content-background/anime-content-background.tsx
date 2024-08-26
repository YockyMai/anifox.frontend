'use client'

import { useInView } from 'framer-motion'
import { useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery, useAnimeScreenshotsQuery } from '@/services/queries'
import { $headerAtoms } from '@/widgets/header/store'

import './anime-content-background.css'

export const AnimeContentBackground = () => {
  const imageRef = useRef<HTMLDivElement>(null)

  const imageInView = useInView(imageRef)
  const { animeUrl } = useParams<AnimePageParams>()!

  const setHeaderIsTransparent = useSetAtom($headerAtoms.isTransparent)

  const { data: animeData } = useAnimeQuery(animeUrl)
  const { data: imagesData } = useAnimeScreenshotsQuery(animeUrl)

  const [imageSrc, setImageSrc] = useState<null | string>(null)

  useEffect(() => {
    setImageSrc(null)
    const imageSrc = animeData?.image.cover
      ? animeData.image.cover
      : imagesData
        ? imagesData[0]
        : ''

    setImageSrc(imageSrc)
  }, [animeData, imagesData])

  useEffect(() => {
    setHeaderIsTransparent(imageInView)

    return () => {
      setHeaderIsTransparent(false)
    }
  }, [imageInView, setHeaderIsTransparent])

  if (!imageSrc) return null

  return (
    <div ref={imageRef} className='anime-content-background'>
      <div
        className='anime-content-background__image'
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    </div>
  )
}
