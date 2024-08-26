import { Metadata } from 'next'

import { SignupScreen } from '@/screens/signup'

export const metadata: Metadata = {
  title: 'Создание аккаунта',
  description: 'Авторизация'
}

const Signup = () => {
  return <SignupScreen />
}

export default Signup
