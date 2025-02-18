import { UnstyledButton } from '@anifox/ui'
import { Link } from 'react-router'

import { ROUTES } from '@/screens/pages.routes'

import { useStepsActions } from '../../hooks'
import { StepContainer } from '../step-container'
import { WelcomeStepProps } from './welcome-step.interface'

export const WelcomeStep = ({ onLoginClick }: WelcomeStepProps) => {
  const { incrementStep } = useStepsActions()

  return (
    <StepContainer
      footer={
        <p className='mt-1 text-center text-sm'>
          Уже есть аккаунт?{' '}
          {onLoginClick ? (
            <UnstyledButton onClick={onLoginClick} className='text-orange-300'>
              Вход
            </UnstyledButton>
          ) : (
            <Link className='text-orange-300' to={ROUTES.LOGIN}>
              Вход
            </Link>
          )}
        </p>
      }
      nextButton={{
        label: 'Создать аккаунт',
        onClick: incrementStep
      }}
      title='🎉 Добро пожаловать в ANIFOX'
    >
      <p className='text-center'>
        Мы очень рады видеть вас на нашем сайте. После авторизации вы сможете
        вести свои списки аниме, добавлять понравившиеся тайтлы в избранное и
        многое другое, желаем вам приятного просмотра!
      </p>
    </StepContainer>
  )
}
