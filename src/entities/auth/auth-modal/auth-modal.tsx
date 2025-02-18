import { Modal } from '@anifox/ui'
import { useEffect, useState } from 'react'

import { LoginForm } from '../login'
import { SignupForm } from '../signup'
import { AUTH_MODAL_FORM, AuthModalProps } from './auth-modal.interface'

export const AuthModal = ({
  isOpen,
  onClose,
  onAuthSuccess
}: AuthModalProps) => {
  const [formType, setFormType] = useState(AUTH_MODAL_FORM.LOGIN)

  const [authModalIsOpen, setAuthModalIsOpen] = useState(isOpen)

  useEffect(() => {
    setAuthModalIsOpen(isOpen)
  }, [isOpen])

  const onOpenChangeAuthModal = (open: boolean) => {
    setAuthModalIsOpen(open)
    if (!open) {
      onClose?.()
    }
  }

  const onSignupClick = () => {
    setFormType(AUTH_MODAL_FORM.SIGN_UP)
  }

  const onLoginClick = () => {
    setFormType(AUTH_MODAL_FORM.LOGIN)
  }

  return (
    <Modal
      title='Быстрая авторизация'
      open={authModalIsOpen}
      onOpenChange={onOpenChangeAuthModal}
      withoutPadding
    >
      {formType === AUTH_MODAL_FORM.LOGIN ? (
        <LoginForm
          onSignupClick={onSignupClick}
          onLoginSuccess={onAuthSuccess}
        />
      ) : (
        <SignupForm onLoginClick={onLoginClick} />
      )}
    </Modal>
  )
}
