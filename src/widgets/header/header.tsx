'use client'

import { useHover } from '@anifox/hooks'
import { AnifoxLogo, Tabs } from '@anifox/ui'
import { clsx } from 'clsx'
import { useAtom } from 'jotai'
import Link from 'next/link'

import { ROUTES } from '@/screens/pages.routes'

import './header.css'
import { useOnChangeHeaderVisibility } from './hooks'
import { useHeaderLinks } from './hooks/use-header-links'
import { $headerAtoms } from './store'

export const Header = () => {
  const [isVisible, setIsVisible] = useAtom($headerAtoms.isVisible)
  const [isTransparent] = useAtom($headerAtoms.isTransparent)

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
      <div className='site-header__left-section'>
        <Link href={ROUTES.HOME}>
          <AnifoxLogo />
        </Link>

        <nav className='site-header__nav'>
          <Tabs
            tabs={links.map(({ content, path }) => ({
              content: <Link href={path}>{content}</Link>,
              key: path
            }))}
            activeTab={activeTab}
            onChange={(key) => setActiveTab(key)}
            withoutActiveBar
          />
        </nav>
      </div>
    </header>
  )
}
