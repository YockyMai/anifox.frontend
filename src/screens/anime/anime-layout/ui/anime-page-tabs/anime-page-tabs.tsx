'use client'

import { IconBook, IconUsers } from '@tabler/icons-react'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import { Tabs } from '@/common/components'
import { usePathname } from '@/i18n/routing'
import { Link } from '@/i18n/routing'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'

import './anime-page-tabs.css'

export const AnimePageTabs = () => {
  const { animeUrl } = useParams<AnimePageParams>()!
  const pathname = usePathname()!

  const [activeTab, setActiveTab] = useState(pathname)

  useEffect(() => {
    setActiveTab(pathname)
  }, [pathname])

  const tabs = useMemo(() => {
    const animeOverviewUrl = `${ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', animeUrl)}`
    const animeCharactersUrl = `${ROUTES.CATALOG.ANIME.CHARACTERS.replace(':animeUrl', animeUrl)}`

    return [
      {
        content: (
          <Link className='anime-page-tabs__tab' href={animeOverviewUrl}>
            <IconBook />
            Обзор
          </Link>
        ),
        key: animeOverviewUrl
      },
      {
        content: (
          <Link className='anime-page-tabs__tab' href={animeCharactersUrl}>
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
