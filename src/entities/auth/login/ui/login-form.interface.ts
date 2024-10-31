export type LoginFormProps = {
  onSignupClick?: () => void
  onLoginSuccess?: () => void
}

export type LoginSchema = {
  password: string
  user_identifier: string
}
