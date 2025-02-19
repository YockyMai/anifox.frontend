import { UnstyledButton } from '@anifox/ui'
import { IconGripVertical, IconPencil, IconTrash } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import React from 'react'

import { AnimeStatusMenuProps } from './anime-status-menu.interface'

export const AnimeStatusMenu = ({
  isCardHovered,
  dragControls,
  withDragging,
  isDragging
}: AnimeStatusMenuProps) => {
  const animate = isCardHovered || isDragging ? 'visible' : 'hidden'

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
      className='absolute right-0 top-0 flex h-full'
    >
      <UnstyledButton className='flex h-full cursor-pointer flex-col items-center justify-center bg-red-400 px-1.5 text-white'>
        <IconTrash className='stroke-white' />
        <p className='text-center text-sm'>Удалить</p>
      </UnstyledButton>

      <UnstyledButton className='flex h-full cursor-pointer flex-col items-center justify-center bg-purple-300 px-1.5 text-white'>
        <IconPencil className='stroke-white' />

        <p className='text-center text-sm'>Изменить</p>
      </UnstyledButton>

      {withDragging && (
        <UnstyledButton
          onPointerDown={(event) => dragControls.start(event)}
          className='flex h-full cursor-grab flex-col items-center justify-center bg-green-400 px-1.5 text-white'
        >
          <IconGripVertical className='stroke-white' />

          <p className='text-center text-sm'>Порядок</p>
        </UnstyledButton>
      )}
    </motion.div>
  )
}
