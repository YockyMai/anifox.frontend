import { Button, AnifoxLogo, UISizes } from '@anifox/ui'
import { clsx } from 'clsx'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useStore } from 'zustand'

import { ROUTES } from '@/pages/pages.routes'

import './header.css'
import { useOnChangeHeaderVisibility } from './hooks'
import { $headerModel } from './model/header.model'

export const Header = () => {
  const { t } = useTranslation()

  const { isVisible, isTransparent, color } = useStore($headerModel.store)

  useOnChangeHeaderVisibility((isVisible) =>
    $headerModel.actions.changeVisibility(isVisible)
  )

  return (
    <header
      className={clsx(
        'site_header',
        isTransparent && 'site_header__transparent',
        !isVisible && 'site_header__hidden'
      )}
      style={{ backgroundColor: color ? color : undefined }}
    >
      <div className='site_header__content'>
        <Link to={ROUTES.HOME}>
          <AnifoxLogo />
        </Link>
        <Link to={ROUTES.SIGN_UP}>
          <Button size={UISizes.MD} withRipple>
            {t('Регистрация')}
          </Button>
        </Link>
      </div>
    </header>
  )
}
