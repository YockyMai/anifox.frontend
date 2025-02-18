import { Button } from '@anifox/ui'
import { useAtomValue } from 'jotai'
import React from 'react'
import { Link } from 'react-router'

import { $userAtoms } from '@/entities/user/atoms'
import { ROUTES } from '@/screens/pages.routes'

import { FEATURES } from './welcome.const'
import './welcome.css'

export const WelcomeBlock = () => {
  const isAuth = useAtomValue($userAtoms.isAuth)

  return (
    <div className='welcome'>
      <div>
        <div className='welcome__logo'>
          <p className='welcome__logo__main'>ANIFOX</p>{' '}
          <p className='welcome__logo__sub'>club</p>
        </div>
        <p className='welcome__title'>
          Платформа для <br /> просмотра и отслеживания аниме
        </p>
        <p className='welcome__description'>
          ANIFOX — Твой помощник в мире аниме! Здесь ты можешь смотреть любимые
          тайтлы в отличном качестве, отслеживать свой прогресс, составлять свои
          списки и делиться оценками с друзьями.
        </p>
        {isAuth ? (
          <Link to={ROUTES.CATALOG.ROOT}>
            <Button color='orange' variant='gradient'>
              Смотреть аниме
            </Button>
          </Link>
        ) : (
          <div className='flex gap-x-3'>
            <Link to={ROUTES.LOGIN}>
              <Button color='red' variant='gradient'>
                Войти в аккаунт
              </Button>
            </Link>
            <Link to={ROUTES.SIGN_UP}>
              <Button color='orange' variant='gradient'>
                Создать аккаунт
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className='welcome__features'>
        {FEATURES.map(({ description, icon, title }) => (
          <div className='welcome__feature' key={title}>
            <div className='welcome__feature__icon'>{icon}</div>
            <p className='welcome__feature__title'>{title}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
