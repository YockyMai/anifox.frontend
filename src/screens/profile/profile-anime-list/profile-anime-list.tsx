import { ScreenSection } from '@anifox/ui'

import { AnimeList } from '@/entities/profile'

export const ProfileAnimeListScreen = () => {
  return (
    <>
      <ScreenSection withContainer>
        <AnimeList />
      </ScreenSection>
    </>
  )
}
