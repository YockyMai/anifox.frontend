import { ScreenSection } from '@/common/components'

import { AnimeScreenshots } from './ui'

export const AnimeOverviewScreen = () => {
  return (
    <div className='container mx-auto'>
      <ScreenSection title='Кадры из аниме'>
        <AnimeScreenshots />
      </ScreenSection>
    </div>
  )
}
