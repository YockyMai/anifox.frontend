import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '@/modules/footer'
import { Header } from '@/modules/header'
import { SuspensePageLoader } from '@/shared/components'

import './main-layout.scss'

export const MainLayout = () => {
  return (
    <div className={'main-layout'}>
      <Header />
      <div className={'main-layout__content'}>
        <main>
          <Suspense fallback={<SuspensePageLoader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  )
}
