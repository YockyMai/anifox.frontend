'use client'

import { useParams } from 'next/navigation'

import { MarqueeText, ScreenSection } from '@/common/components'
import { KodikPlayer } from '@/entities/players/kodik-player'
import {
  useAnimeQuery,
  useAnimeRelatedQuery,
  useAnimeVideosQuery
} from '@/services/queries'

import { AnimePageParams } from '../anime.interface'
import { AnimeFranchise } from './anime-franchise'
import './anime-overview.css'
import { AnimeScreenshots } from './anime-screenshots'
import { AnimeVideos } from './anime-videos'

export const AnimeOverviewScreen = () => {
  const { animeUrl } = useParams<AnimePageParams>()

  const { data } = useAnimeQuery(animeUrl)

  const { data: videos = [], isLoading: isVideosLoading } =
    useAnimeVideosQuery(animeUrl)

  const { data: related = [] } = useAnimeRelatedQuery(animeUrl)

  return (
    <div className='anime-overview'>
      <div className='container'>
        <ScreenSection title='Кадры из аниме'>
          <AnimeScreenshots />
        </ScreenSection>

        {!isVideosLoading && videos.length > 0 && (
          <ScreenSection title='Трейлеры и видео'>
            <AnimeVideos />
          </ScreenSection>
        )}
      </div>

      {related.length > 0 && (
        <div className='container'>
          <ScreenSection title='Хронология'>
            <AnimeFranchise />
          </ScreenSection>
        </div>
      )}

      <div id='player' className='anime-overview__player'>
        <MarqueeText>
          <p className='anime-overview__player__title'>
            Смотреть аниме &quot;{data!.title}&quot;
          </p>
        </MarqueeText>
        <KodikPlayer animeUrl={animeUrl} />
      </div>
    </div>
  )
}
