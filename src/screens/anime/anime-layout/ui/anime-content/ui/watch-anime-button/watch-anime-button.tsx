import { IconPlayerPlayFilled } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

import { Button } from '@/common/components'

export const WatchAnimeButton = () => {
  return (
    <Link href={'#'}>
      <Button withRipple fullWidth icon={<IconPlayerPlayFilled />}>
        Смотреть аниме
      </Button>
    </Link>
  )
}
