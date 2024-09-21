import { createPortal } from 'react-dom'

import { PortalProps } from './portal.interface'

export const Portal = ({ children }: PortalProps) => {
  return <>{createPortal(children, document.body)}</>
}
