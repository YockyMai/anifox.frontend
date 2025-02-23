import { ScreenLoader } from '@anifox/ui'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

import { ProfileContextProvider } from '@/entities/profile'
import { $viewer } from '@/entities/viewer'

import { Banner, ProfilePageTabs } from './ui'

export const ProfileLayout = () => {
  // Пока что отображаем профиль только владельца.
  const user = $viewer.selectors.user()

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
