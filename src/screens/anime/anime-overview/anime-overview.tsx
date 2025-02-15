import { MarqueeText, ScreenSection } from '@anifox/ui'
import { useSetAtom } from 'jotai'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router'

import { KodikPlayer } from '@/entities/players/kodik-player'
import {
  useAnimeQuery,
  useAnimeRelatedQuery,
  useAnimeScreenshotsQuery,
  useAnimeVideosQuery
} from '@/services/queries'

import { AnimePageParams } from '../anime.interface'
import { $animePlayerRef } from '../store/anime-player-ref'
import { AnimeEpisodesHistory } from './anime-episodes-history/anime-episodes-history'
import { AnimeFranchise } from './anime-franchise'
import './anime-overview.css'
import { AnimeScreenshots } from './anime-screenshots'
import { AnimeVideos } from './anime-videos'

export const AnimeOverviewScreen = () => {
  const setPlayerRef = useSetAtom($animePlayerRef)
  const playerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (playerRef) {
      setPlayerRef(playerRef)
    }
  }, [playerRef])

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
    <div className='anime-overview'>
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

      <div id='player' className='anime-overview__player'>
        <MarqueeText>
          <p className='anime-overview__player__title'>
            Смотреть аниме &quot;{data?.title}&quot;
          </p>
        </MarqueeText>
        <KodikPlayer ref={playerRef} animeUrl={animeUrl!} />
      </div>

      <AnimeEpisodesHistory />
    </div>
  )
}
