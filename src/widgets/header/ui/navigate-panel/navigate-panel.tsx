import clsx from 'clsx'
import { useAtomValue } from 'jotai'
import React from 'react'

import { Tabs } from '@/common/components'
import { Link } from '@/i18n/routing'
import { useHeaderLinks } from '@/widgets/header/hooks/use-header-links'

import { $headerAtoms } from '../../store'
import './navigate-panel.css'

export const NavigatePanel = () => {
  const isTransparent = useAtomValue($headerAtoms.isTransparent)

  const { links, activeTab, setActiveTab } = useHeaderLinks()

  return (
    <nav
      className={clsx(
        'navigate-panel',
        isTransparent && 'navigate-panel--transparent'
      )}
    >
      <Tabs
        activeTabColor='#FB9A3C'
        hoverColor='rgba(255, 255, 255, 0.15)'
        tabs={links.map(({ content, path }) => ({
          content: (
            <Link
              className={clsx(
                'navigate-panel__link',
                path === activeTab && 'navigate-panel__link_active'
              )}
              href={path}
            >
              {content}
            </Link>
          ),
          key: path
        }))}
        activeTab={activeTab}
        onChange={(key) => setActiveTab(key)}
        withoutActiveBar
      />
    </nav>
  )
}
