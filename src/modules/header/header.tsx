import { AnifoxLogo } from '@anifox/ui'
import { Link } from 'react-router-dom'

import { PAGE_URLS } from '@/pages/pages.const'

import './header.scss'

export const Header = () => {
  return (
    <header className="site_header">
      <Link to={PAGE_URLS.HOME}>
        <AnifoxLogo />
      </Link>
    </header>
  )
}
