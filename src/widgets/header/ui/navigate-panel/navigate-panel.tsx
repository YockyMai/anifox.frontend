import { Tabs } from '@anifox/ui'
import clsx from 'clsx'
import { useAtomValue } from 'jotai'
import { Link } from 'react-router'

import { useHeaderLinks } from '@/widgets/header/hooks/use-header-links'

import { $headerAtoms } from '../../store'

export const NavigatePanel = () => {
  const isTransparent = useAtomValue($headerAtoms.isTransparent)

  const { links, activeTab, setActiveTab } = useHeaderLinks()

  return (
    <nav
      className={clsx(
        'rounded bg-slate-900/70 px-1.5 text-sm text-slate-300',
        isTransparent && 'bg-slate-900/50 backdrop-blur-3xl'
      )}
    >
      <Tabs
        activeTabColor='#FB9A3C'
        hoverColor='rgba(255, 255, 255, 0.15)'
        tabs={links.map(({ content, path }) => ({
          content: (
            <Link
              className={clsx(
                'hover:text-inherit',
                path === activeTab && 'text-orange-300 hover:text-orange-300'
              )}
              to={path}
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
