import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import './footer.css'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className={'site_footer'}>
      <Link to={'#'}>{t('Для правообладателей')}</Link>
      <p>{`© anifox.club 2023 - ${new Date().getFullYear()}`}</p>
    </footer>
  )
}
