import { Tabs } from '@anifox/ui'
import clsx from 'clsx'
import { useAtom } from 'jotai'
import React, { useMemo } from 'react'

import { $kodikPlayerAtoms } from '../../store/kodik-player'
import { KODIK_TABS } from '../../store/kodik-player/kodik-player.const'
import { KodikTabs } from '../../store/kodik-player/kodik-player.interface'
import { Episodes } from '../episodes'
import { Translations } from '../translations'
import './kodik-sidebar.css'

export const KodikSidebar = () => {
  const [activeTab, setActiveTab] = useAtom($kodikPlayerAtoms.activeTab)

  const tabs = useMemo(
    () => [
      {
        content: (
          <div className='kodik-sidebar__tab'>
            <p>Серии</p>
          </div>
        ),
        key: KODIK_TABS.EPISODES
      },
      {
        content: (
          <div className='kodik-sidebar__tab'>
            <p>Озвучки</p>
          </div>
        ),
        key: KODIK_TABS.TRANSLATIONS
      }
    ],
    []
  )

  const handleChangeActiveTab = (tab: string) => {
    setActiveTab(tab as KodikTabs)
  }

  return (
    <div
      className={clsx(
        'kodik-sidebar',
        activeTab === KODIK_TABS.EPISODES && 'kodik-sidebar_episodes'
      )}
    >
      <div className='kodik-sidebar__tabs_container'>
        <Tabs
          fullWidth
          withoutHoverIndicator
          activeTab={activeTab}
          tabs={tabs}
          onChange={handleChangeActiveTab}
        />
      </div>

      {activeTab === KODIK_TABS.EPISODES && <Episodes />}
      {activeTab === KODIK_TABS.TRANSLATIONS && <Translations />}
    </div>
  )
}
