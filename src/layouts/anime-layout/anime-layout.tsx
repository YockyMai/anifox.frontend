import { useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'

export const AnimeLayout = () => {
  const { animeUrl } = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [animeUrl])

  return (
    <div>
      <Outlet />
    </div>
  )
}
