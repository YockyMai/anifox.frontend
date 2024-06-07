import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import { SuspensePageLoader } from '@/shared/components'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

import './main-layout.css'

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
