import { ScreenLoader } from '@anifox/ui'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

import { useProfile } from '@/entities/profile/hooks'

import { Banner, ProfilePageTabs } from './ui'

export const ProfileLayout = () => {
  const { profile } = useProfile()

  if (!profile) {
    return null
  }

  return (
    // <ProfileContextProvider user={user} isOwner>
    <div className='relative'>
      <Banner />
      <ProfilePageTabs />

      <Suspense fallback={<ScreenLoader />}>
        <Outlet />
      </Suspense>
    </div>
    // </ProfileContextProvider>
  )
}
