import { Alert, Button, Carousel, ScreenSection, Slide } from '@anifox/ui'
import { IconPlayerTrackNext } from '@tabler/icons-react'

import {
  AnimeCardContinueWatching,
  AnimeCardContinueWatchingLoader
} from '@/entities/anime/anime-card'
import { useLastWatchedEpisodesQuery } from '@/graphql/generated/output'

import { ContinueWatchingProps } from './continue-watching.interface'

export const ContinueWatching = ({ userId }: ContinueWatchingProps) => {
  const { data, loading, error } = useLastWatchedEpisodesQuery({
    variables: {
      userId,
      page: 0
    }
  })

  if (error) {
    return null
  }

  const list = data?.lastWatchedEpisodes?.data ?? []

  return (
    <ScreenSection
      withContainer
      titleIcon={<IconPlayerTrackNext />}
      title='Продолжить просмотр'
    >
      {loading && (
        <Carousel
          align='center'
          slides={Array.from({ length: 3 }).map((_, index) => ({
            content: <AnimeCardContinueWatchingLoader />,
            size: 300,
            key: `loader-${index}`
          }))}
        />
      )}

      {list.length ? (
        <Carousel
          align='center'
          slides={list.map((info) => ({
            size: 300,
            content: <AnimeCardContinueWatching info={info} />,
            key: info.id
          }))}
        />
      ) : (
        <Alert
          variant='light'
          color='purple'
          title='Здесь будут недавно просмотренные аниме'
        >
          Начните смотреть аниме, и они появятся здесь
        </Alert>
        // <div className='rounded bg-slate-800 p-11'>
        //   <p className='mb-5 text-center'>Вы пока ничего не смотрели :(</p>
        //   <p className='text-center text-lg'>
        //     Начните смотреть аниме, и они появятся здесь
        //   </p>

        //   <div className='mx-auto mt-4 w-fit'>
        //     <Button variant='outline'>Смотреть</Button>
        //   </div>
        // </div>
      )}
    </ScreenSection>
  )
}
