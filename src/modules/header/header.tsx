import { AnifoxLogo } from '@anifox/ui'
import { Link } from 'react-router-dom'

import { Routes } from '@/shared/routing/paths'

import './header.scss'

export const Header = () => {
  return (
    <header className="site_header">
      <Link to={Routes.MAIN}>
        <AnifoxLogo />
      </Link>
    </header>
  )
}
