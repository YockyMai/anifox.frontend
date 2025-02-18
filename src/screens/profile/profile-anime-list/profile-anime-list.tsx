import { ScreenSection } from '@anifox/ui'
import React from 'react'

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
