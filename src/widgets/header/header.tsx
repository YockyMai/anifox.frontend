import { Button, AnifoxLogo, Tabs } from '@anifox/ui'
import { clsx } from 'clsx'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useStore } from 'zustand'

import { ROUTES } from '@/pages/pages.routes'

import './header.css'
import { useOnChangeHeaderVisibility } from './hooks'
import { useHeaderLinks } from './hooks/use-header-links'
import { $headerModel } from './model/header.model'
import { RandomButton } from './ui/random-button/random-button'
import { SearchButton } from './ui/search-button/search-button'

export const Header = () => {
  const { t } = useTranslation()

  const { isVisible, isTransparent, color } = useStore($headerModel.store)

  useOnChangeHeaderVisibility((isVisible) =>
    $headerModel.actions.changeVisibility(isVisible)
  )

  const headerLinks = useHeaderLinks()

  return (
    <header
      className={clsx(
        'site-header',
        isTransparent && 'site-header__transparent',
        !isVisible && 'site-header__hidden'
      )}
      style={{ backgroundColor: color ? color : undefined }}
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

        <RandomButton />
      </div>
      <div className='site-header__left-section'>
        <SearchButton />
        <Link to={ROUTES.SIGN_UP}>
          <Button variant='outline' color='light-blue' size='sm' withRipple>
            {t('Регистрация')}
          </Button>
        </Link>
      </div>
    </header>
  )
}
