import { useHover } from '@anifox/ui'
import { IconGripVertical } from '@tabler/icons-react'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  Reorder,
  useDragControls
} from 'framer-motion'
import React from 'react'

import { $animeList, $animeListFilters } from '@/entities/profile'
import { AnimeTrackStatuses, MAP_ANIME_LIST_STATUS_LABEL } from '@/services/api'

export const AnimeListStatusFilter = () => {
  const rows = $animeList.selectors.rows()

  const selectedStatus = $animeListFilters.selectors.status()

  return (
    <div>
      <p className='mb-1 text-sm font-bold'>Статусы</p>

      <Reorder.Group
        axis='x'
        values={rows}
        onReorder={(values) => $animeList.actions.reorder(values)}
      >
        <div className='flex h-[40px] items-center gap-x-3 rounded-lg bg-white px-2'>
          {rows.map((status) => (
            <Status
              isSelected={status === selectedStatus}
              key={status}
              status={status}
            />
          ))}
        </div>
      </Reorder.Group>
    </div>
  )
}

const Status = ({
  status,
  isSelected
}: {
  status: AnimeTrackStatuses
  isSelected: boolean
}) => {
  const { isHovered, hoverProps } = useHover()
  const dragControls = useDragControls()

  return (
    <Reorder.Item
      dragListener={false}
      dragControls={dragControls}
      value={status}
    >
      <motion.div
        {...hoverProps}
        onClick={() => {
          $animeListFilters.actions.setStatus(isSelected ? null : status)
        }}
        className={clsx(
          'flex cursor-pointer select-none items-center rounded px-3 py-1 transition-colors',
          isSelected && 'bg-slate-300/30 text-orange-400/80'
        )}
      >
        <motion.div
          initial={false}
          animate={isHovered ? 'visible' : 'hidden'}
          variants={{
            hidden: {
              opacity: 0,
              width: 0,
              scale: 0
            },
            visible: {
              opacity: 1,
              scale: 1,
              width: 'auto'
            }
          }}
          className='z-10 cursor-grab fill-black'
          onClick={(e) => e.stopPropagation()}
          onPointerDown={(e) => dragControls.start(e)}
        >
          <IconGripVertical />
        </motion.div>

        <p className='font-semibold'>{MAP_ANIME_LIST_STATUS_LABEL[status]}</p>
      </motion.div>
    </Reorder.Item>
  )
}
