import { Tabs } from '@anifox/ui'
import { IconBook, IconHeart } from '@tabler/icons-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router'

import { useProfile } from '@/entities/profile'
import { ROUTES } from '@/screens/pages.routes'

export const ProfilePageTabs = () => {
  const { profile } = useProfile()

  const { pathname } = useLocation()

  const [activeTab, setActiveTab] = useState(pathname)

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  const tabs = useMemo(() => {
    const profileUrl = `${ROUTES.PROFILE.ROOT.replace(':login', profile!.login)}`
    const animeListUrl = `${ROUTES.PROFILE.ANIME_LIST.replace(':login', profile!.login)}`
    const favoritesUrl = `${ROUTES.PROFILE.FAVORITES.replace(':login', profile!.login)}`

    return [
      {
        content: (
          <Link
            className='flex items-center gap-x-1 text-nowrap'
            to={profileUrl}
          >
            <IconBook />
            Обзор
          </Link>
        ),
        key: profileUrl
      },
      {
        content: (
          <Link
            className='flex items-center gap-x-1 text-nowrap'
            to={animeListUrl}
          >
            <IconBook />
            Список аниме
          </Link>
        ),
        key: animeListUrl
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
  }, [profile!.login])

  return (
    <div className='flex w-full justify-center bg-white dark:bg-slate-800/50'>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={(url) => setActiveTab(url)}
      />
    </div>
  )
}
