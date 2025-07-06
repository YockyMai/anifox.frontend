import { AnifoxLogo, UnstyledButton, useHover } from '@anifox/ui'
import { IconMenu2 } from '@tabler/icons-react'
import { clsx } from 'clsx'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import { Link } from 'react-router'

import { UIVariants } from '@/common/types/ui-variants'
import { SiteThemeToggler } from '@/entities/site-theme'
import { ROUTES } from '@/screens/pages.routes'

import {
  CatalogSearch,
  CatalogSearchButton,
  CatalogSearchRoot
} from '../anifox-search'
import './header.css'
import { useIsMobileHeader, useOnChangeHeaderVisibility } from './hooks'
import { $headerAtoms } from './store'
import { MobileMenu } from './ui/mobile-menu/mobile-menu'
import { NavigatePanel } from './ui/navigate-panel/navigate-panel'
import { RandomAnimeButton } from './ui/random-anime-button'
import { UserButton } from './ui/user-button/user-button'

export const Header = () => {
  const setIsMobileMenuOpen = useSetAtom($headerAtoms.isMobileMenuOpen)

  const [isVisible, setIsVisible] = useAtom($headerAtoms.isVisible)

  const isTransparent = useAtomValue($headerAtoms.isTransparent)
  const isMobileHeader = useIsMobileHeader()

  useOnChangeHeaderVisibility((isVisible) => setIsVisible(isVisible))

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
        <Link to={ROUTES.HOME}>
          <AnifoxLogo />
        </Link>

        <div className='site-header__desktop'>
          <NavigatePanel />
        </div>

        <div className='site-header__desktop'>
          <RandomAnimeButton
            variant={isTransparent ? UIVariants.OUTLINE : UIVariants.LIGHT}
          />
        </div>
      </div>

      <div className='site-header__desktop'>
        <div className='site-header__section'>
          <CatalogSearchButton />
          <SiteThemeToggler />
          <UserButton />
        </div>
      </div>

      <div className='site-header__mobile'>
        <div className='site-header__section'>
          <CatalogSearchButton />
          <SiteThemeToggler />
          <UnstyledButton
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              setIsMobileMenuOpen((prev) => !prev)
            }}
          >
            <IconMenu2 />
          </UnstyledButton>
        </div>
      </div>

      {isMobileHeader && <MobileMenu />}

      <CatalogSearch />
    </header>
  )
}
