'use client'

import { useHover } from '@anifox/hooks'
import { clsx } from 'clsx'
import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'

import { AnifoxLogo, Tabs } from '@/common/components'
import { ROUTES } from '@/screens/pages.routes'

import './header.css'
import { useOnChangeHeaderVisibility } from './hooks'
import { useHeaderLinks } from './hooks/use-header-links'
import { $headerAtoms } from './store'
import { UserButton } from './ui/user-button/user-button'

export const Header = () => {
  const [isVisible, setIsVisible] = useAtom($headerAtoms.isVisible)
  const isTransparent = useAtomValue($headerAtoms.isTransparent)

  useOnChangeHeaderVisibility((isVisible) => setIsVisible(isVisible))

  const { links, activeTab, setActiveTab } = useHeaderLinks()

  const { hoverProps, isHovered } = useHover()

  return (
    <header
      {...hoverProps}
      className={clsx(
        'site-header',
        isTransparent && !isHovered && 'site-header__transparent',
        !isVisible && 'site-header__hidden'
      )}
    >
      <div className='site-header__section'>
        <Link href={ROUTES.HOME}>
          <AnifoxLogo />
        </Link>

        <nav className='site-header__nav'>
          <Tabs
            activeTabColor='#FB9A3C'
            hoverColor='rgba(255, 255, 255, 0.15)'
            tabs={links.map(({ content, path }) => ({
              content: (
                <Link
                  className={clsx(
                    'site-header__nav__link',
                    path === activeTab && 'site-header__nav__link_active'
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
      </div>

      <div className='site-header__section'>
        <UserButton />
      </div>
    </header>
  )
}
