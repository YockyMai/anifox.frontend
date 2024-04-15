import { Button, AnifoxLogo, UiSizes } from '@anifox/ui'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/pages/pages.routes'

import './header.scss'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <header className="site_header">
      <Link to={ROUTES.HOME}>
        <AnifoxLogo />
      </Link>
      <Link to={ROUTES.SIGN_UP}>
        <Button withRipple radius={UiSizes.MD}>
          {t('Регистрация')}
        </Button>
      </Link>
    </header>
  )
}
