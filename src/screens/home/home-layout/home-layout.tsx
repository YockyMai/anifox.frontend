import { NavigationProgress, ScreenLoader } from '@anifox/ui'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router'

import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import { HomeLayoutMetadata } from './home-layout.metadata'

export const HomeLayout = () => {
  return (
    <>
      <HomeLayoutMetadata />
      <NavigationProgress />
      <div className='app'>
        <Header />
        <div className='app__layout'>
          <main>
            <Suspense fallback={<ScreenLoader />}>
              <Outlet />
            </Suspense>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
