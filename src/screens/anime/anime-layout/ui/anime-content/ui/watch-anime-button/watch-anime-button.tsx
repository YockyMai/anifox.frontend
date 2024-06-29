import { Button } from '@anifox/ui'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export const WatchAnimeButton = () => {
  return (
    <Link href={'#'}>
      <Button withRipple fullWidth>
        <p className='text-nowrap break-words'>Смотреть аниме</p>
      </Button>
    </Link>
  )
}
