import { Link } from 'react-router-dom'

import { Routes } from '@/shared/routing/paths'

import './anifox-logo.scss'

export const AnifoxLogo = () => {
  return (
    <Link to={Routes.MAIN} className={'anifox-logo'}>
      <img src={'/anifox-logo.webp'} className={'anifox-logo__image'} />
      <div className={'anifox-logo__text'}>
        <p>Ani</p>
        <p>Fox</p>
      </div>
    </Link>
  )
}
