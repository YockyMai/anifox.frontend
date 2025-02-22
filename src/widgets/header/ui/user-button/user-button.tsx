import { Button } from '@anifox/ui'
import { IconUserFilled } from '@tabler/icons-react'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { $viewer } from '@/entities/viewer'
import { ROUTES } from '@/screens/pages.routes'

import { $headerAtoms } from '../../store'

export const UserButton = () => {
  const navigate = useNavigate()

  const setIsMobileMenuOpen = useSetAtom($headerAtoms.isMobileMenuOpen)
  const user = $viewer.selectors.user()

  const handleClick = () => {
    setIsMobileMenuOpen(false)

    if (user) {
      navigate(ROUTES.PROFILE.ROOT.replace(':login', user.preferred_username))
    } else {
      navigate(ROUTES.LOGIN)
    }
  }

  return (
    <Button
      icon={<IconUserFilled />}
      onClick={handleClick}
      fullWidth
      size={UISizes.SM}
      color={UIColors.PURPLE}
      variant='gradient'
    >
      {user ? user.preferred_username : 'Войти в аккаунт'}
    </Button>
  )
}
