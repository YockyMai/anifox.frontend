import { IconPaint, IconUserCog } from '@tabler/icons-react'
import { useMemo } from 'react'
import { Outlet, useLocation } from 'react-router'

import { MenuList } from '@/common/components'
import { MenuListGroup } from '@/common/components/menu-list/menu-list.interface'
import { ROUTES } from '@/screens/pages.routes'

export const SettingsLayout = () => {
  const { pathname } = useLocation()

  const links = useMemo<MenuListGroup[]>(() => {
    return [
      {
        title: 'Настройки',
        items: [
          {
            icon: <IconUserCog />,
            id: ROUTES.SETTINGS.ROOT,
            title: 'Пользователь',
            link: ROUTES.SETTINGS.ROOT
          },
          {
            icon: <IconPaint />,
            id: ROUTES.SETTINGS.APPEARANCE,
            title: 'Внешний вид',
            link: ROUTES.SETTINGS.APPEARANCE
          }
        ]
      }
    ]
  }, [])

  return (
    <div className='container mt-[120px] grid grid-cols-1 gap-x-10 xl:grid-cols-[250px_1fr]'>
      <MenuList items={links} selectedItemId={pathname} />

      <div className='mt-7 rounded-md bg-white p-8 dark:bg-slate-800'>
        <Outlet />
      </div>
    </div>
  )
}
