import { SwitchAnimation, useHover } from '@anifox/ui'
import { IconGripVertical, IconX } from '@tabler/icons-react'
import clsx from 'clsx'
import { motion, Reorder, useDragControls } from 'framer-motion'

import { AnimeTrackStatusIcon } from '@/common/components/anime-track-status-icon/anime-track-status-icon'
import { $animeList, $animeListFilters } from '@/entities/profile'
import {
  AnimeTrackStatuses,
  MAP_ANIME_TRACK_STATUS_LABEL
} from '@/services/api'

export const TrackStatus = () => {
  const rows = $animeList.selectors.rows()

  const selectedStatus = $animeListFilters.selectors.trackStatus()

  return (
    <div>
      <p className='mb-1 text-sm font-bold'>Статусы</p>

      <Reorder.Group
        axis='y'
        values={rows}
        onReorder={(values) => $animeList.actions.reorder(values)}
      >
        <div className='flex flex-col gap-y-1 rounded-lg bg-white p-2 dark:bg-slate-800'>
          {rows.map((status) => (
            <StatusItem
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

const StatusItem = ({
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
          $animeListFilters.actions.setTrackStatus(isSelected ? null : status)
        }}
        className={clsx(
          'flex cursor-pointer select-none items-center justify-between rounded px-3 py-1 transition-colors',
          isSelected &&
            'bg-slate-300/30 text-orange-400/80 dark:bg-slate-700 dark:text-orange-300'
        )}
      >
        <div className='flex items-center'>
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

          <p className='font-semibold'>
            {MAP_ANIME_TRACK_STATUS_LABEL[status]}
          </p>
        </div>

        {isSelected ? <IconX /> : <AnimeTrackStatusIcon status={status} />}
      </motion.div>
    </Reorder.Item>
  )
}
