import { MarqueeText, ScreenSection } from '@anifox/ui'
import { useParams } from 'react-router'

import { KodikPlayer } from '@/entities/players/kodik-player'
import { useAnimeQuery } from '@/graphql/generated/output'
import { useAnimeRelatedQuery, useAnimeVideosQuery } from '@/graphql/queries'

import { AnimePageParams } from '../anime.interface'
import { AnimeEpisodesHistory } from './anime-episodes-history/anime-episodes-history'
import { AnimeFranchise } from './anime-franchise'
import { PLAYER_ELEMENT_ID } from './anime-overview.const'
import { AnimeScreenshots } from './anime-screenshots'
import { AnimeVideos } from './anime-videos'

export const AnimeOverviewScreen = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data, loading } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const screenshots = data?.anime.screenshots

  const videos = data?.anime.videos

  const { data: related, isLoading: isLoadingRelated } = useAnimeRelatedQuery(
    animeUrl!
  )
  return (
    <div>
      <div className='container'>
        {!loading && screenshots && screenshots.length > 0 && (
          <ScreenSection title='Кадры из аниме'>
            <AnimeScreenshots />
          </ScreenSection>
        )}

        {!loading && videos && videos.length > 0 && (
          <ScreenSection title='Трейлеры и видео'>
            <AnimeVideos />
          </ScreenSection>
        )}
      </div>

      {!isLoadingRelated && related && related.length > 0 && (
        <div className='container'>
          <ScreenSection title='Хронология'>
            <AnimeFranchise />
          </ScreenSection>
        </div>
      )}

      <div
        id={PLAYER_ELEMENT_ID}
        className='mx-auto my-14 bg-slate-200 px-2 py-14 dark:bg-slate-800 md:px-11'
      >
        <MarqueeText>
          <p className='text-lg font-bold dark:text-slate-300 xl:text-2xl'>
            Смотреть аниме &quot;{data?.anime.title}&quot;
          </p>
        </MarqueeText>
        <KodikPlayer animeUrl={animeUrl!} />
      </div>

      <AnimeEpisodesHistory />
    </div>
  )
}
