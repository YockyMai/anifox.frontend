import { UnstyledButton, useHover } from '@anifox/ui'
import {
  IconDots,
  IconDotsVertical,
  IconGripVertical,
  IconPencil,
  IconTrash
} from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React from 'react'

import { AnimeStatusMenuProps } from './anime-status-menu.interface'

export const AnimeStatusMenu = ({
  isCardHovered,
  isDragging
}: AnimeStatusMenuProps) => {
  const { isHovered, hoverProps } = useHover()

  const animate =
    isDragging || isHovered
      ? 'visible'
      : isCardHovered
        ? 'preVisible'
        : 'hidden'

  return (
    <motion.div
      {...hoverProps}
      initial={false}
      animate={animate}
      variants={{
        visible: {
          translateX: 0
        },
        preVisible: {
          translateX: '90%'
        },
        hidden: {
          translateX: '100%'
        }
      }}
      className='absolute right-0 top-0 flex h-full'
    >
      <motion.div
        animate={isHovered || isDragging ? 'hidden' : 'visible'}
        variants={{
          visible: {
            width: 27
          },
          hidden: {
            width: 0
          }
        }}
        className='flex h-full w-[27px] items-center justify-center bg-orange-300'
      >
        <IconDotsVertical className='stroke-white' />
      </motion.div>

      <UnstyledButton className='flex aspect-square h-full cursor-pointer flex-col items-center justify-center bg-red-400 text-white'>
        <IconTrash className='stroke-white' />
        <p className='text-center text-sm'>Удалить</p>
      </UnstyledButton>

      <UnstyledButton className='flex aspect-square h-full cursor-pointer flex-col items-center justify-center bg-purple-300 text-white'>
        <IconPencil className='stroke-white' />

        <p className='text-center text-sm'>Изменить</p>
      </UnstyledButton>

      <UnstyledButton className='flex aspect-square h-full cursor-grab flex-col items-center justify-center bg-green-400 text-white'>
        <IconGripVertical className='stroke-white' />

        <p className='text-center text-sm'>Порядок</p>
      </UnstyledButton>
    </motion.div>
  )
}
