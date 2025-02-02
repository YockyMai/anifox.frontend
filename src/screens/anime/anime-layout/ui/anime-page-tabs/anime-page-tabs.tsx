import { IconBook, IconUsers } from '@tabler/icons-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

import { Tabs } from '@/common/components'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'

import './anime-page-tabs.css'

export const AnimePageTabs = () => {
  const { animeUrl } = useParams<AnimePageParams>()!
  const { pathname } = useLocation()

  const [activeTab, setActiveTab] = useState(pathname)

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  const tabs = useMemo(() => {
    const animeOverviewUrl = `${ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', animeUrl!)}`
    const animeCharactersUrl = `${ROUTES.CATALOG.ANIME.CHARACTERS.replace(':animeUrl', animeUrl!)}`

    return [
      {
        content: (
          <Link className='anime-page-tabs__tab' to={animeOverviewUrl}>
            <IconBook />
            Обзор
          </Link>
        ),
        key: animeOverviewUrl
      },
      {
        content: (
          <Link className='anime-page-tabs__tab' to={animeCharactersUrl}>
            <IconUsers />
            Персонажи
          </Link>
        ),
        key: animeCharactersUrl
      }
    ]
  }, [animeUrl])

  return (
    <div className='anime-page-tabs'>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={(url) => setActiveTab(url)}
      />
    </div>
  )
}
