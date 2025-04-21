import { Button, Tooltip } from '@anifox/ui'
import { IconHeartFilled } from '@tabler/icons-react'

import { UIColors } from '@/common/types/ui-colors'
import { useToggleFavoriteAnimeMutation } from '@/graphql/generated/output'

import { AnimeFavoriteButtonProps } from './anime-favorite-button.interface'

export const AnimeFavoriteButton = ({
  size = 28,
  animeUrl
}: AnimeFavoriteButtonProps) => {
  const iconSize = Math.round(size / 1.3)

  const [toggleFavoriteAnime] = useToggleFavoriteAnimeMutation()

  return (
    <Tooltip withoutArrow label={'Добавить в избранное'}>
      <Button
        onClick={() =>
          toggleFavoriteAnime({
            variables: {
              animeUrl
            }
          })
        }
        color={UIColors.RED}
        style={{ height: size, width: size }}
        className='flex items-center justify-center p-3'
      >
        <IconHeartFilled size={iconSize} />
      </Button>
    </Tooltip>
  )
}
