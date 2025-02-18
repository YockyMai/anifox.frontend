import { Tabs } from '@anifox/ui'
import { IconBook, IconHeart } from '@tabler/icons-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'
import { ProfilePageParams } from '@/screens/profile/profile.interface'

export const ProfilePageTabs = () => {
  const { login } = useParams<ProfilePageParams>()
  const { pathname } = useLocation()

  const [activeTab, setActiveTab] = useState(pathname)

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  const tabs = useMemo(() => {
    const profileUrl = `${ROUTES.PROFILE.ROOT.replace(':login', login!)}`
    const favoritesUrl = `${ROUTES.PROFILE.FAVORITES.replace(':login', login!)}`

    return [
      {
        content: (
          <Link
            className='flex items-center gap-x-1 text-nowrap'
            to={profileUrl}
          >
            <IconBook />
            Список аниме
          </Link>
        ),
        key: profileUrl
      },
      {
        content: (
          <Link
            className='flex items-center gap-x-1 text-nowrap'
            to={favoritesUrl}
          >
            <IconHeart />
            Избранное
          </Link>
        ),
        key: favoritesUrl
      }
    ]
  }, [login])

  return (
    <div className='flex w-full justify-center bg-slate-400/30 dark:bg-slate-800/50'>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={(url) => setActiveTab(url)}
      />
    </div>
  )
}
