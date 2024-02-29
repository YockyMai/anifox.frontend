import { UnstyledButton } from '@anifox/ui'
import { IconMenu2 } from '@tabler/icons-react'

import './menu-icon.scss'

export const MenuIcon = () => {
  return (
    <div className={'menu-icon'}>
      <UnstyledButton className={'menu-icon__button'}>
        <IconMenu2 />
      </UnstyledButton>
    </div>
  )
}
