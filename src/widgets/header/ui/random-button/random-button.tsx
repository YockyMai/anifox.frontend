import { IconDice } from '@tabler/icons-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import './random-button.css'

export const RandomButton = () => {
  const { t } = useTranslation()

  return (
    <Link to={''} className='random-button'>
      <IconDice />
      {t('Рандом')}
    </Link>
  )
}
