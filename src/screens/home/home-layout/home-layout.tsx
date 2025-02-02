import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { NavigationProgress, ScreenLoader } from '@/common/components'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export const HomeLayout = () => {
  return (
    <>
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
