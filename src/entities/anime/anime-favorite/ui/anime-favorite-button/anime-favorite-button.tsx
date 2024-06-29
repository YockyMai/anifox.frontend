import { Button, Tooltip, UIColors } from '@anifox/ui'
import { IconHeartFilled } from '@tabler/icons-react'

import './anime-favorite-button.css'
import { AnimeFavoriteButtonProps } from './anime-favorite-button.interface'

export const AnimeFavoriteButton = ({
  size = 28
}: AnimeFavoriteButtonProps) => {
  const iconSize = Math.round(size / 1.3)

  return (
    <Tooltip withoutArrow label={<p>Добавить в избранное</p>}>
      <Button
        color={UIColors.RED}
        style={{ height: size, width: size }}
        withRipple
        className='anime-favorite-button'
      >
        <IconHeartFilled size={iconSize} />
      </Button>
    </Tooltip>
  )
}
