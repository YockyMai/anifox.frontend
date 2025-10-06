import { ViewerFragment } from '@/graphql/generated/output'

export type LoginFormProps = {
  onSignupClick?: () => void
  onLoginSuccess?: (user: ViewerFragment) => void
}

export type LoginSchema = {
  password: string
  user_identifier: string
}
