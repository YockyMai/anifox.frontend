'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useMemo, useState } from 'react'

import { Tabs } from '@/common/components'
import { AnimePageParams } from '@/screens/anime/anime.interface'
import { ROUTES } from '@/screens/pages.routes'

import './anime-page-tabs.css'

export const AnimePageTabs = () => {
  const { animeUrl } = useParams<AnimePageParams>()!
  const pathname = usePathname()!

  const [activeTab, setActiveTab] = useState(pathname)

  const animeOverviewUrl = `${ROUTES.CATALOG.ANIME.ROOT.replace(':animeUrl', animeUrl)}`
  const animeCharactersUrl = `${ROUTES.CATALOG.ANIME.CHARACTERS.replace(':animeUrl', animeUrl)}`

  const tabs = useMemo(
    () => [
      {
        content: <Link href={animeOverviewUrl}>Обзор</Link>,
        key: animeOverviewUrl
      },
      {
        content: <Link href={animeCharactersUrl}>Персонажи</Link>,
        key: animeCharactersUrl
      }
    ],
    [animeOverviewUrl, animeCharactersUrl]
  )

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
