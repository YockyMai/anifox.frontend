import * as Dialog from '@radix-ui/react-dialog'
import { IconX } from '@tabler/icons-react'

import { UnstyledButton } from '../unstyled-button'
import './modal.css'
import { ModalProps } from './modal.interface'

export const Modal = ({
  children,
  trigger,
  title,
  description,
  onOpenChange,
  open,
  withoutCloseButton
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className='modal__overlay' />
        <Dialog.Content className='modal__content'>
          {!withoutCloseButton && (
            <Dialog.Close asChild>
              <UnstyledButton
                className='modal__close-button'
                aria-label='close'
              >
                <IconX />
              </UnstyledButton>
            </Dialog.Close>
          )}

          {title && (
            <Dialog.Title className='modal__title'>{title}</Dialog.Title>
          )}

          {description && (
            <Dialog.Description className='modal__description'>
              {description}
            </Dialog.Description>
          )}

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
