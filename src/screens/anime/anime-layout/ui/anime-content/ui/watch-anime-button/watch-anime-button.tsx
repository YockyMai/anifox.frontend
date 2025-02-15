import { Button } from '@anifox/ui'
import { IconPlayerPlayFilled } from '@tabler/icons-react'
import { useAtomValue } from 'jotai'

import { $animePlayerRef } from '@/screens/anime/store/anime-player-ref'

export const WatchAnimeButton = () => {
  const ref = useAtomValue($animePlayerRef)

  return (
    <Button
      onClick={() => {
        ref?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }}
      fullWidth
      icon={<IconPlayerPlayFilled />}
    >
      Смотреть аниме
    </Button>
  )
}
