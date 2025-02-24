import { UnstyledButton } from '@anifox/ui'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import { motion } from 'framer-motion'

import { AnimeStatusMenuProps } from './anime-status-menu.interface'

export const AnimeStatusMenu = ({
  isCardHovered,
  onDeleteButtonClick,
  onEditButtonClick,
  anime
}: AnimeStatusMenuProps) => {
  const animate = isCardHovered ? 'visible' : 'hidden'

  return (
    <motion.div
      initial={false}
      animate={animate}
      variants={{
        visible: {
          translateX: 0
        },
        hidden: {
          translateX: '101%'
        }
      }}
      className='absolute right-0 top-0 z-10 flex h-full'
    >
      <UnstyledButton
        onClick={() => onDeleteButtonClick?.(anime.url)}
        className='flex h-full w-[80px] cursor-pointer flex-col items-center justify-center bg-red-400 text-white'
      >
        <IconTrash className='stroke-white' />
        <p className='text-center text-sm'>Удалить</p>
      </UnstyledButton>

      <UnstyledButton
        onClick={() => onEditButtonClick?.(anime.url)}
        className='flex h-full w-[80px] cursor-pointer flex-col items-center justify-center bg-green-400 text-white dark:bg-green-500'
      >
        <IconPencil className='stroke-white' />

        <p className='text-center text-sm'>Изменить</p>
      </UnstyledButton>
    </motion.div>
  )
}
