import { Outlet } from 'react-router-dom'

import { Footer } from '@/modules/footer'
import { Header } from '@/modules/header'

import './main-layout.scss'

export const MainLayout = () => {
  return (
    <div className={'main-layout'}>
      <Header />
      <div className={'main-layout__content'}>
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
