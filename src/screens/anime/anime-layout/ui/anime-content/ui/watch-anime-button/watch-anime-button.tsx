import { IconPlayerPlayFilled } from '@tabler/icons-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

import { Button } from '@/common/components'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'

export const WatchAnimeButton = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  return (
    <Link href={ROUTES.CATALOG.ANIME.WATCH.replace(':animeUrl', animeUrl)}>
      <Button fullWidth icon={<IconPlayerPlayFilled />}>
        Смотреть аниме
      </Button>
    </Link>
  )
}
