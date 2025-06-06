import { MarqueeText, ScreenSection } from '@anifox/ui'
import { useParams } from 'react-router'

import { KodikPlayer } from '@/entities/players/kodik-player'
import {
  useAnimeQuery,
  useAnimeRelatedQuery,
  useAnimeScreenshotsQuery,
  useAnimeVideosQuery
} from '@/services/queries'

import { AnimePageParams } from '../anime.interface'
import { AnimeEpisodesHistory } from './anime-episodes-history/anime-episodes-history'
import { AnimeFranchise } from './anime-franchise'
import { PLAYER_ELEMENT_ID } from './anime-overview.const'
import { AnimeScreenshots } from './anime-screenshots'
import { AnimeVideos } from './anime-videos'

export const AnimeOverviewScreen = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data } = useAnimeQuery(animeUrl!)

  const { data: screenshots, isLoading: isLoadingScreenshots } =
    useAnimeScreenshotsQuery(animeUrl!)

  const { data: videos, isLoading: isLoadingVideos } = useAnimeVideosQuery(
    animeUrl!
  )

  const { data: related, isLoading: isLoadingRelated } = useAnimeRelatedQuery(
    animeUrl!
  )
  return (
    <div>
      <div className='container'>
        {!isLoadingScreenshots && screenshots && screenshots.length > 0 && (
          <ScreenSection title='Кадры из аниме'>
            <AnimeScreenshots />
          </ScreenSection>
        )}

        {!isLoadingVideos && videos && videos.length > 0 && (
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
            Смотреть аниме &quot;{data?.title}&quot;
          </p>
        </MarqueeText>
        <KodikPlayer animeUrl={animeUrl!} />
      </div>

      <AnimeEpisodesHistory />
    </div>
  )
}
