import React, { useState } from 'react'

import { Tabs } from '@/common/components'

import { Episodes } from '../episodes'
import { Translations } from '../translations'
import { KODIK_TABS } from './kodik-sidebar.const'
import './kodik-sidebar.css'

export const KodikSidebar = () => {
  const [activeTab, setActiveTab] = useState(KODIK_TABS.EPISODES)

  return (
    <div className='kodik-sidebar'>
      <div className='bg-slate-950'>
        <Tabs
          activeTabColor='#FFFFFF'
          fullWidth
          activeTab={activeTab}
          tabs={[
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
          ]}
          onChange={(tab) => setActiveTab(tab)}
        />
      </div>

      {activeTab === KODIK_TABS.EPISODES && <Episodes />}
      {activeTab === KODIK_TABS.TRANSLATIONS && <Translations />}
    </div>
  )
}
