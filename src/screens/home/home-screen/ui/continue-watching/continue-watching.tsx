import { Button, Carousel, ScreenSection, Slide } from '@anifox/ui'
import { IconPlayerTrackNext } from '@tabler/icons-react'
import React, { useMemo } from 'react'
import { Link } from 'react-router'

import { AnimeCardContinueWatching } from '@/entities/anime/anime-card'
import { $viewer } from '@/entities/viewer'
import { useLastWatchedEpisodesQuery } from '@/graphql/generated/output'
import { ROUTES } from '@/screens/pages.routes'

import { ContinueWatchingProps } from './continue-watching.interface'

export const ContinueWatching = ({ userId }: ContinueWatchingProps) => {
  const { data, loading, error } = useLastWatchedEpisodesQuery({
    variables: {
      userId,
      page: 0
    }
  })

  if (loading) {
    return 'loading'
  }

  if (error) {
    return null
  }

  if (!data) {
    return null
  }

  const list = data.lastWatchedEpisodes?.data ?? []

  const slides: Slide[] = list.map((info) => ({
    size: 300,
    content: <AnimeCardContinueWatching info={info} />,
    key: info.id
  }))

  return (
    <ScreenSection
      withContainer
      titleIcon={<IconPlayerTrackNext />}
      title='Продолжить просмотр'
    >
      {slides.length > 0 ? (
        <Carousel align='center' slides={slides} />
      ) : (
        <div className='rounded bg-slate-800 p-11'>
          <p className='mb-5 text-center'>Вы пока ничего не смотрели :(</p>
          <p className='text-center text-lg'>
            Начните смотреть аниме, и они появятся здесь
          </p>

          <div className='mx-auto mt-4 w-fit'>
            <Button variant='outline'>Смотреть</Button>
          </div>
        </div>
      )}
    </ScreenSection>
  )
}
