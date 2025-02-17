import { Button } from '@anifox/ui'
import { IconPlayerPlayFilled } from '@tabler/icons-react'

import { PLAYER_ELEMENT_ID } from '@/screens/anime/anime-overview'

export const WatchAnimeButton = () => {
  const scrollToPlayer = () => {
    const player = document.getElementById(PLAYER_ELEMENT_ID)

    if (player) {
      player.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Button onClick={scrollToPlayer} fullWidth icon={<IconPlayerPlayFilled />}>
      Смотреть аниме
    </Button>
  )
}
