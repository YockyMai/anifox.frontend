import * as Dialog from '@radix-ui/react-dialog'
import { IconX } from '@tabler/icons-react'
import clsx from 'clsx'

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
  withoutCloseButton,
  withoutPadding
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className='modal__overlay' />
        <Dialog.Content className='modal__content'>
          <div className='modal__header'>
            {title && (
              <Dialog.Title className='modal__title'>{title}</Dialog.Title>
            )}

            {!withoutCloseButton && (
              <Dialog.Close asChild>
                <UnstyledButton
                  className='modal__close-button'
                  aria-label='close'
                >
                  <IconX size={32} />
                </UnstyledButton>
              </Dialog.Close>
            )}
          </div>

          {description && (
            <Dialog.Description className='modal__description'>
              {description}
            </Dialog.Description>
          )}

          <div
            className={clsx(
              'modal__body',
              withoutPadding && 'modal__body--without-padding'
            )}
          >
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
