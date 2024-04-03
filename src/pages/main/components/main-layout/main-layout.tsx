import { Outlet } from 'react-router-dom'

import { Header } from '@/modules/header'

import './main-layout.scss'

export const MainLayout = () => {
  return (
    <div className={'main-layout'}>
      <Header />
      <div className={'main-layout__content'}>
        {/* <Sidebar /> */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
