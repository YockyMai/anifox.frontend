import {
  Button,
  Image,
  Popover,
  UIColors,
  UISizes,
  UnstyledButton
} from '@anifox/ui'
import { IconDots, IconShare, IconTrash } from '@tabler/icons-react'
import { Link } from 'react-router'

import { FavoriteCardProps } from './favorite-card.interface'

export const FavoriteCard = ({
  image,
  title,
  count,
  to
}: FavoriteCardProps) => {
  return (
    <div className='flex select-none items-center justify-between p-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-700'>
      <div className='flex-[5]'>
        <div className='flex items-center gap-x-3'>
          <Link to={to}>
            <div className='aspect-square h-[50px]'>
              <Image src={image} alt='Изображение отсутсвует' />
            </div>
          </Link>

          <Link title={title} to={to}>
            {title}
          </Link>
        </div>
      </div>

      <div className='flex-1'>
        <p className='text-center font-bold'>{count}</p>
      </div>
      <div className='flex-1'>
        <div className='flex justify-center'>
          <Popover
            withoutArrow
            unstyled
            trigger={
              <UnstyledButton>
                <IconDots />
              </UnstyledButton>
            }
          >
            <div className='overflow-hidden rounded drop-shadow-2xl'>
              <div>
                <Button
                  fullWidth
                  className='rounded-none!'
                  color={UIColors.RED}
                  icon={<IconTrash />}
                  size={UISizes.SM}
                >
                  <p>Удалить</p>
                </Button>
              </div>
              <div>
                <Link to={to}>
                  <Button
                    fullWidth
                    className='rounded-none!'
                    color={UIColors.PURPLE}
                    icon={<IconShare />}
                    size={UISizes.SM}
                  >
                    <p>К персонажу</p>
                  </Button>
                </Link>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  )
}
