import { Button, HoverCard, Image, UnstyledButton } from '@anifox/ui'
import { IconChevronDown, IconUserFilled } from '@tabler/icons-react'
import { useSetAtom } from 'jotai'
import { useNavigate } from 'react-router'

import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { DEFAULT_USER_AVATAR } from '@/entities/user'
import { $viewer } from '@/entities/viewer'
import { ROUTES } from '@/screens/pages.routes'

import { $headerAtoms } from '../../store'
import { UserDropdown } from './user-dropdown/user-dropdown'

export const UserButton = () => {
  const navigate = useNavigate()

  const setIsMobileMenuOpen = useSetAtom($headerAtoms.isMobileMenuOpen)

  const viewer = $viewer.selectors.viewer()

  const handleClick = () => {
    setIsMobileMenuOpen(false)

    if (viewer) {
      navigate(ROUTES.PROFILE.ROOT.replace(':login', viewer.login))
    } else {
      navigate(ROUTES.LOGIN)
    }
  }

  if (!viewer) {
    return (
      <Button
        icon={<IconUserFilled />}
        onClick={handleClick}
        fullWidth
        size={UISizes.SM}
        color={UIColors.PURPLE}
        variant='gradient'
      >
        Войти в аккаунт
      </Button>
    )
  }

  return (
    <HoverCard
      withoutArrow
      unstyled
      trigger={
        <UnstyledButton className='flex items-center gap-x-1.5'>
          <Image
            className='h-9 w-9'
            src={viewer.avatar ?? DEFAULT_USER_AVATAR}
          />
          <IconChevronDown size={20} />
        </UnstyledButton>
      }
    >
      <UserDropdown />
    </HoverCard>
  )
}
