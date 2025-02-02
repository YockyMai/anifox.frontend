import { useResetSignupForm } from '../../hooks'
import { StepContainer } from '../step-container'

export const ErrorStep = () => {
  const resetForm = useResetSignupForm()

  return (
    <StepContainer
      prevButton={{ label: 'Пройти регистрацию заново', onClick: resetForm }}
      title='❌ Ошибка при создании аккаунта'
    >
      <p className='text-center'>
        На нашем сервере произошла ошибочка :( Попробуйте повторить процесс
        создания аккаунта заново.
      </p>
    </StepContainer>
  )
}
