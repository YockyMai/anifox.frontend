import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/common/components'

import { ROUTES } from '../pages.routes'
import { POLICY_CONTENT } from './right-holders.const'

export const RightHolders = () => {
  return (
    <div className='right-holders'>
      <div className='right-holders__copyrights'>
        <h1>Для правообладателей</h1>
      </div>
      <div className='right-holders__box'>
        <h3>
          Деятельность сайта <Link to={ROUTES.HOME}>anifox.club</Link>{' '}
          осуществляется в соответствии с законодательством Российской Федерации
          в области защиты информации и авторских прав на контент.
        </h3>
        <ul className='right-holders__list'>
          {POLICY_CONTENT.map(({ text }, index) => (
            <li key={index} className='right-holders__list__item'>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className='right-holders__box'>
        <h3>
          Если вы обнаружили материал, представленный на нашем сайте, который
          нарушает ваши авторские права, или же дискредитирует Вашу компанию,
          предоставляя неверную или искаженную информацию, пожалуйста свяжитесь
          с нами по почте{' '}
          <Link target='_blank' to='mailto: abuse@anifox.club'>
            abuse@anifox.club{' '}
          </Link>
          для решения этого вопроса.
        </h3>
        <ul className='right-holders__list'>
          <p>
            Для этого необходимо отправить e-mail с вашего корпоративного
            почтового ящика содержащий:
          </p>
          <li className='right-holders__list__item'>
            контактные данные, реквизиты вашей компании;
          </li>
          <li className='right-holders__list__item'>
            прямую ссылку(ссылки) на материал, который вы считаете спорным;
          </li>
          <li className='right-holders__list__item'>
            заверенные сканированные копии документов, подтверждающих ваше
            эксклюзивное право на материал;
          </li>
          <li className='right-holders__list__item'>
            в случае, если вы представляете интересы другой компании – копии
            документов на посреднические услуги;
          </li>
        </ul>
      </div>

      <div className='right-holders__links-container'>
        <h3>Разрешения для встраивания видео:</h3>

        <div className='right-holders__links'>
          <Link
            target='_blank'
            to='https://developers.google.com/youtube/terms/api-services-terms-of-service-ru'
          >
            <Button>YouTube</Button>
          </Link>
          <Link target='_blank' to='https://rutube.ru/info/agreement/'>
            <Button>RuTube</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
