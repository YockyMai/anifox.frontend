import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useParams } from 'react-router'

import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useAnimeQuery, useAnimeScreenshotsQuery } from '@/services/queries'
import { useToggleHeaderOpacity } from '@/widgets/header'

import './anime-content-background.css'

export const AnimeContentBackground = () => {
  // needed the hook from this library because it works if the element is lower z-index 0
  const { ref, inView: imageInView } = useInView()

  useToggleHeaderOpacity(imageInView)

  const { animeUrl } = useParams<AnimePageParams>()!

  const { data: animeData, isLoading } = useAnimeQuery(animeUrl!)
  const { data: imagesData } = useAnimeScreenshotsQuery(animeUrl!)

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

  return (
    <div ref={ref} className='anime-content-background'>
      {isLoading ? (
        <div className='anime-content-background__image-loader' />
      ) : (
        <>
          {imageSrc && (
            <div
              className='anime-content-background__image'
              style={{ backgroundImage: `url(${imageSrc})` }}
            />
          )}
        </>
      )}
    </div>
  )
}
