import { Popover, UnstyledButton } from '@anifox/ui'
import { IconPencil, IconTrash } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'

import { AnimeListButton } from '@/entities/anime/anime-list'

import { AnimeStatusMenuProps } from './anime-status-menu.interface'

export const AnimeStatusMenu = ({
  isCardHovered,
  onDeleteButtonClick,
  onEditButtonClick,
  anime,
  status
}: AnimeStatusMenuProps) => {
  return (
    <AnimatePresence initial={false}>
      {isCardHovered && (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 'fit-content' }}
          exit={{ width: 0 }}
          className='flex h-full gap-x-1 overflow-hidden'
        >
          <UnstyledButton
            onClick={() => onDeleteButtonClick?.(anime.url)}
            className='flex h-full cursor-pointer flex-col items-center justify-center rounded bg-red-400 px-3 py-0.5 text-white'
          >
            <IconTrash className='stroke-white' />
            <p className='text-center text-sm'>Удалить</p>
          </UnstyledButton>

          <Popover
            withoutArrow
            unstyled
            trigger={
              <UnstyledButton
                onClick={() => onEditButtonClick?.(anime.url)}
                className='flex h-full cursor-pointer flex-col items-center justify-center rounded bg-green-400 px-3 py-0.5 text-white dark:bg-green-500'
              >
                <IconPencil className='stroke-white' />

                <p className='text-center text-sm'>Изменить</p>
              </UnstyledButton>
            }
          >
            <AnimeListButton
              animeUrl={anime.url}
              onlyContent
              currentAnimeListStatus={status}
            />
          </Popover>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
