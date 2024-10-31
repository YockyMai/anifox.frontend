export type AuthModalProps = {
  isOpen?: boolean
  onClose?: () => void
  onAuthSuccess?: () => void
}

export enum AUTH_MODAL_FORM {
  LOGIN = 'login',
  SIGN_UP = 'sign-up'
}
