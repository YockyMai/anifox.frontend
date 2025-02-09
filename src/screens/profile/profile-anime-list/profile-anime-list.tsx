import React from 'react'
import { useParams } from 'react-router'

import { Input, ScreenSection } from '@/common/components'
import { UserAnimeList } from '@/entities/user'

import { ProfilePageParams } from '../profile.interface'

export const ProfileAnimeListScreen = () => {
  const { login } = useParams<ProfilePageParams>()

  return (
    <>
      <ScreenSection withContainer>
        <UserAnimeList login={login!} />
      </ScreenSection>
    </>
  )
}
