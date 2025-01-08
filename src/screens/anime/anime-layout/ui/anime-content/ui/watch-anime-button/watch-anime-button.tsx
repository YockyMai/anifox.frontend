import { IconPlayerPlayFilled } from '@tabler/icons-react'
import Link from 'next/link'

import { Button } from '@/common/components'

import { PLAYER_ANCHOR } from './watch-anime-button.const'

export const WatchAnimeButton = () => {
  return (
    <Link href={PLAYER_ANCHOR}>
      <Button fullWidth icon={<IconPlayerPlayFilled />}>
        Смотреть аниме
      </Button>
    </Link>
  )
}
