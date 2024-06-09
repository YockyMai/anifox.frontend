import { Image } from '@anifox/ui'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useParams } from 'react-router-dom'

import { useGetAnime } from '@/services/queries'
import { $headerModel } from '@/widgets/header/model/header.model'

export const AnimeBanner = () => {
  const { animeUrl } = useParams()

  const { data } = useGetAnime(animeUrl!)

  const [bannerRef, bannerInView] = useInView()

  useEffect(() => {
    $headerModel.actions.setIsTransparent(bannerInView)

    return () => {
      $headerModel.actions.setIsTransparent(false)
    }
  }, [bannerInView])

  return (
    <div ref={bannerRef}>
      <Image height={400} src={data?.data.image?.cover ?? ''} />
    </div>
  )
}
