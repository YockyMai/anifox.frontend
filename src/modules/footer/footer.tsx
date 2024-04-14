import { Link } from 'react-router-dom'

import './footer.scss'

export const Footer = () => {
  return (
    <footer className={'site_footer'}>
      <Link to={'#'}>{'Для правообладателей'}</Link>
      <p>{`© anifox.club 2023 - ${new Date().getFullYear()}`}</p>
    </footer>
  )
}
