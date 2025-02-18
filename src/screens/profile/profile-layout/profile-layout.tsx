import { ScreenLoader } from '@anifox/ui'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

import { Banner, ProfilePageTabs } from './ui'

export const ProfileLayout = () => {
  return (
    <div className='relative'>
      <Banner />
      <ProfilePageTabs />

      <Suspense fallback={<ScreenLoader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
