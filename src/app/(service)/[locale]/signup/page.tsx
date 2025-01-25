import { Metadata } from 'next'

import { SignupScreen } from '@/screens/signup'

export const metadata: Metadata = {
  title: 'Регистрация аккаунта',
  description:
    'Создайте личный аккаунт ANIFOX и получите возможность оценивать аниме, отслеживать свой прогресс, составлять списки и общаться с друзьями.'
}

const Signup = () => {
  return <SignupScreen />
}

export default Signup
