import { IconPlayerPlayFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

import { Button } from '@/common/components'

import { PLAYER_ANCHOR } from './watch-anime-button.const'

export const WatchAnimeButton = () => {
  return (
    <Link to={PLAYER_ANCHOR}>
      <Button fullWidth icon={<IconPlayerPlayFilled />}>
        Смотреть аниме
      </Button>
    </Link>
  )
}
