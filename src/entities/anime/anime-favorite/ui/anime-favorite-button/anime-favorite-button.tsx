import { IconHeartFilled } from '@tabler/icons-react'

import { Button, Tooltip } from '@/common/components'
import { UIColors } from '@/common/types/ui-colors'

import './anime-favorite-button.css'
import { AnimeFavoriteButtonProps } from './anime-favorite-button.interface'

export const AnimeFavoriteButton = ({
  size = 28
}: AnimeFavoriteButtonProps) => {
  const iconSize = Math.round(size / 1.3)

  return (
    <Tooltip label={'Добавить в избранное'}>
      <Button
        color={UIColors.RED}
        style={{ height: size, width: size }}
        className='anime-favorite-button'
      >
        <IconHeartFilled size={iconSize} />
      </Button>
    </Tooltip>
  )
}
