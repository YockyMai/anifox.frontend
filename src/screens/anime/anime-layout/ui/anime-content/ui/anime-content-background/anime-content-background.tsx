import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useParams } from 'react-router'

import { useAnimeQuery } from '@/graphql/generated/output'
import { useAnimeScreenshotsQuery } from '@/graphql/queries'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { useToggleHeaderOpacity } from '@/widgets/header'

import './anime-content-background.css'

export const AnimeContentBackground = () => {
  // needed the hook from this library because it works if the element is lower z-index 0
  const { ref, inView: imageInView } = useInView()

  useToggleHeaderOpacity(imageInView)

  const { animeUrl } = useParams<AnimePageParams>()!

  const { data, loading } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const { data: imagesData } = useAnimeScreenshotsQuery(animeUrl!)

  const [imageSrc, setImageSrc] = useState<null | string>(null)

  useEffect(() => {
    setImageSrc(null)
    const imageSrc = data?.anime?.image.cover
      ? data?.anime?.image.cover
      : imagesData
        ? imagesData[0]
        : ''

    setImageSrc(imageSrc)
  }, [data, imagesData])

  return (
    <div ref={ref} className='anime-content-background'>
      {loading ? (
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
