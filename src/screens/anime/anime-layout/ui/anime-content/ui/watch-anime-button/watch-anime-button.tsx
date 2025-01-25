import { IconPlayerPlayFilled } from '@tabler/icons-react'

import { Button } from '@/common/components'
import { Link } from '@/i18n/routing'

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
