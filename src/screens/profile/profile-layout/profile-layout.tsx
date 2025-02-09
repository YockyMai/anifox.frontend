import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

import { ScreenLoader } from '@/common/components'

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
