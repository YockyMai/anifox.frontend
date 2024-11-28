'use client'

import { ScreenSection } from '@/common/components'

import { AnimeFranchise } from './anime-franchise'
import { AnimeScreenshots } from './anime-screenshots'
import { AnimeVideos } from './anime-videos'

export const AnimeOverviewScreen = () => {
  return (
    <div>
      <div className='container'>
        <ScreenSection title='Кадры из аниме'>
          <AnimeScreenshots />
        </ScreenSection>

        <ScreenSection title='Трейлеры и видео'>
          <AnimeVideos />
        </ScreenSection>
      </div>

      <div className='container'>
        <ScreenSection title='Хронология'>
          <AnimeFranchise />
        </ScreenSection>
      </div>
    </div>
  )
}
