'use client'

import { useHover } from '@anifox/hooks'
import { IconMenu, IconMenu2 } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useAtom, useAtomValue } from 'jotai'
import Link from 'next/link'

import { AnifoxLogo, UnstyledButton } from '@/common/components'
import { UIVariants } from '@/common/types/ui-variants'
import { useSyncSiteTheme } from '@/entities/site-theme'
import { ROUTES } from '@/screens/pages.routes'

import './header.css'
import { useIsMobileHeader, useOnChangeHeaderVisibility } from './hooks'
import { $headerAtoms } from './store'
import { MobileMenu } from './ui/mobile-menu/mobile-menu'
import { NavigatePanel } from './ui/navigate-panel/navigate-panel'
import { RandomAnimeButton } from './ui/random-anime-button'
import { UserButton } from './ui/user-button/user-button'

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useAtom(
    $headerAtoms.isMobileMenuOpen
  )

  const [isVisible, setIsVisible] = useAtom($headerAtoms.isVisible)

  const isTransparent = useAtomValue($headerAtoms.isTransparent)
  const isMobileHeader = useIsMobileHeader()

  useOnChangeHeaderVisibility((isVisible) => setIsVisible(isVisible))

  const { hoverProps, isHovered } = useHover()

  useSyncSiteTheme()

  return (
    <header
      {...hoverProps}
      className={clsx(
        'site-header',
        isTransparent &&
          !isHovered &&
          !isMobileHeader &&
          'site-header__transparent',
        !isVisible && !isMobileHeader && 'site-header__hidden',
        !isMobileHeader && !isMobileMenuOpen && 'site-header--with-shadow'
      )}
    >
      <div className='site-header__section'>
        <Link href={ROUTES.HOME}>
          <AnifoxLogo />
        </Link>

        {!isMobileHeader && <NavigatePanel />}

        {!isMobileHeader && (
          <RandomAnimeButton
            variant={isTransparent ? UIVariants.FILLED : UIVariants.LIGHT}
          />
        )}
      </div>

      {isMobileHeader ? (
        <UnstyledButton onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <IconMenu2 /> : <IconMenu />}
        </UnstyledButton>
      ) : (
        <div className='site-header__section'>
          <UserButton />
        </div>
      )}

      {isMobileHeader && <MobileMenu />}
    </header>
  )
}
