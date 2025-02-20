import { ScreenLoader } from '@anifox/ui'
import { useAtomValue } from 'jotai'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

import { ProfileContextProvider } from '@/entities/profile'
import { $userAtoms } from '@/entities/user/atoms'

import { Banner, ProfilePageTabs } from './ui'

export const ProfileLayout = () => {
  // Пока что отображаем профиль только владельца.
  const user = useAtomValue($userAtoms.user)

  if (!user) {
    return null
  }

  return (
    <ProfileContextProvider user={user} isOwner>
      <div className='relative'>
        <Banner />
        <ProfilePageTabs />

        <Suspense fallback={<ScreenLoader />}>
          <Outlet />
        </Suspense>
      </div>
    </ProfileContextProvider>
  )
}
