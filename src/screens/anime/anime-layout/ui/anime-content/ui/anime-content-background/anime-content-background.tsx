'use client'

import { useSetAtom } from 'jotai'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery, useAnimeScreenshotsQuery } from '@/services/queries'
import { $headerAtoms } from '@/widgets/header/store'

import './anime-content-background.css'

export const AnimeContentBackground = () => {
  // needed the hook from this library because it works if the element is lower z-index 0
  const { ref, inView: imageInView } = useInView()

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
    <div ref={ref} className='anime-content-background'>
      <div
        className='anime-content-background__image'
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
    </div>
  )
}
