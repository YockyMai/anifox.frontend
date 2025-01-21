'use client'

import { IconUserFilled } from '@tabler/icons-react'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRouter } from 'next/navigation'

import { Button } from '@/common/components'
import { UIColors } from '@/common/types/ui-colors'
import { UISizes } from '@/common/types/ui-sizes'
import { $userAtoms } from '@/entities/user/atoms'
import { ROUTES } from '@/screens/pages.routes'

import { $headerAtoms } from '../../store'

export const UserButton = () => {
  const router = useRouter()

  const setIsMobileMenuOpen = useSetAtom($headerAtoms.isMobileMenuOpen)
  const user = useAtomValue($userAtoms.user)

  const handleClick = () => {
    setIsMobileMenuOpen(false)
    router.push(ROUTES.LOGIN)
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
      {user ? user.nickname : 'Войти в аккаунт'}
    </Button>
  )
}
