import { User } from '@/entities/viewer/atoms/user.interface'

export type LoginFormProps = {
  onSignupClick?: () => void
  onLoginSuccess?: (user: User) => void
}

export type LoginSchema = {
  password: string
  user_identifier: string
}
