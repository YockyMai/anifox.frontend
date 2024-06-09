import { useHover } from '@anifox/hooks'
import { AnifoxLogo, Tabs } from '@anifox/ui'
import { clsx } from 'clsx'
import { Link } from 'react-router-dom'
import { useStore } from 'zustand'

import { ROUTES } from '@/pages/pages.routes'

import './header.css'
import { useOnChangeHeaderVisibility } from './hooks'
import { useHeaderLinks } from './hooks/use-header-links'
import { $headerModel } from './model/header.model'

export const Header = () => {
  const { isVisible, isTransparent } = useStore($headerModel.store)

  useOnChangeHeaderVisibility((isVisible) =>
    $headerModel.actions.setVisibility(isVisible)
  )

  const headerLinks = useHeaderLinks()

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
        <Link to={ROUTES.HOME}>
          <AnifoxLogo />
        </Link>

        <nav className='site-header__nav'>
          <Tabs
            tabs={headerLinks.map(({ content, path }) => ({
              content: <Link to={path}>{content}</Link>,
              key: path
            }))}
          />
        </nav>
      </div>
    </header>
  )
}
