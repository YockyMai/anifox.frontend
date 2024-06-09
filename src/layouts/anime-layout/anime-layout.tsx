import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import '@/services/queries'
import { useGetAnime } from '@/services/queries'

import { AnimeBanner } from './ui'

export const AnimeLayout = () => {
  const { animeUrl } = useParams()

  const { data } = useGetAnime(animeUrl!)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [animeUrl])

  if (!data?.data) {
    return null
  }

  return (
    <div>
      <AnimeBanner />
      <Outlet />
    </div>
  )
}
