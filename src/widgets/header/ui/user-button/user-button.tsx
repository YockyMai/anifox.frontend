import { IconUserFilled } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/common/components'
import { UIVariants } from '@/common/types/ui-variants'
import { $userAtoms } from '@/entities/user/atoms'
import { ROUTES } from '@/screens/pages.routes'

export const UserButton = () => {
  const user = useAtomValue($userAtoms.user)

  if (!user) {
    return (
      <Link href={ROUTES.LOGIN}>
        <Button
          icon={<IconUserFilled />}
          color={'light-blue'}
          size={'sm'}
          variant={UIVariants.OUTLINE}
        >
          Войти
        </Button>
      </Link>
    )
  }

  return (
    <div>
      <Button variant={UIVariants.OUTLINE}>{user.email}</Button>
    </div>
  )
}
