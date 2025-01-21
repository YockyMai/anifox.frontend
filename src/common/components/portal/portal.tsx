'use client'

import { createPortal } from 'react-dom'

import { PortalProps } from './portal.interface'

export const Portal = ({ children }: PortalProps) => {
  return (
    typeof document !== 'undefined' && createPortal(children, document?.body)
  )
}
