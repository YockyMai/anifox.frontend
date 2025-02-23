import { User } from '@/entities/viewer'

export type LoginFormProps = {
  onSignupClick?: () => void
  onLoginSuccess?: (user: User) => void
}

export type LoginSchema = {
  password: string
  user_identifier: string
}
