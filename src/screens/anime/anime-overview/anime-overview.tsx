'use client'

import { ScreenSection } from '@/common/components'

import { AnimeFranchise } from './anime-franchise'
import { AnimePlayer } from './anime-player'
import { AnimeScreenshots } from './anime-screenshots'
import { AnimeVideos } from './anime-videos'

export const AnimeOverviewScreen = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <ScreenSection title='Кадры из аниме'>
          <AnimeScreenshots />
        </ScreenSection>

        <ScreenSection title='Трейлеры и видео'>
          <AnimeVideos />
        </ScreenSection>
      </div>

      <AnimePlayer />

      <div className='container mx-auto'>
        <ScreenSection title='Хронология'>
          <AnimeFranchise />
        </ScreenSection>
      </div>
    </div>
  )
}
