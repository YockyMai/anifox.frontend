import { Outlet } from 'react-router-dom'
import { Header } from '@/modules/header'
import { SidebarMenu } from '@/modules/sidebar-menu'
import './main.layout.styles.pcss'

export const MainLayout = () => {
  return (
    <div className={'main_layout'}>
      <div className={'main_layout__header'}>
        <Header />
      </div>
      <div className={'main_layout__content'}>
        <SidebarMenu />
        <main className={'main_layout__container'}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
