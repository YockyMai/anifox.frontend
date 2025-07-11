import { MarqueeText, ScreenSection } from '@anifox/ui'
import { useParams } from 'react-router'

import { KodikPlayer } from '@/entities/players/kodik-player'
import {
  useAnimeQuery,
  useRelatedAnimesQuery,
  useSimilarAnimesQuery
} from '@/graphql/generated/output'
import { AnimeComments } from '@/widgets/anime-comments'

import { AnimePageParams } from '../anime.interface'
import { AnimeEpisodesHistory } from './anime-episodes-history/anime-episodes-history'
import { AnimeFranchise } from './anime-franchise'
import { PLAYER_ELEMENT_ID } from './anime-overview.const'
import { AnimeScreenshots } from './anime-screenshots'
import { AnimeSimilar } from './anime-similar'
import { AnimeVideos } from './anime-videos'

export const AnimeOverviewScreen = () => {
  const { animeUrl, animeId } = useParams<AnimePageParams>()

  const { data, loading } = useAnimeQuery({
    variables: {
      url: animeUrl!
    }
  })

  const screenshots = data?.anime.screenshots

  const videos = data?.anime.videos

  const { data: related, loading: loadingRelated } = useRelatedAnimesQuery({
    variables: {
      animeId: animeId!,
      limit: 1000,
      page: 0
    }
  })

  const { data: similar, loading: loadingSimilar } = useSimilarAnimesQuery({
    variables: {
      animeId: animeId!,
      limit: 1000,
      page: 0
    }
  })

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

      {!loadingRelated &&
        related?.relatedAnimes &&
        related.relatedAnimes.data.length > 0 && (
          <div className='container'>
            <ScreenSection title='Хронология'>
              <AnimeFranchise />
            </ScreenSection>
          </div>
        )}

      {!loadingSimilar &&
        similar?.similarAnimes &&
        similar.similarAnimes.data.length > 0 && (
          <div className='container'>
            <ScreenSection title='Похожие аниме'>
              <AnimeSimilar />
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
        <KodikPlayer animeUrl={animeUrl!} animeId={animeId!} />
      </div>

      <AnimeEpisodesHistory />

      <ScreenSection withContainer title='Комментарии к аниме'>
        <AnimeComments animeId={animeId!} />
      </ScreenSection>
    </div>
  )
}
