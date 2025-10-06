import { SoundWave, UnstyledButton, useHover } from '@anifox/ui'
import { IconGripVertical } from '@tabler/icons-react'
import clsx from 'clsx'
import {
  AnimatePresence,
  motion,
  Reorder,
  useDragControls
} from 'framer-motion'

import { useKodikPlayerStores } from '../../../context'
import { useTotalTranslatedEpisodes } from '../../../hooks/use-total-translated-episodes'
import { TranslationProps } from './translation.interface'

export const Translation = ({
  translation,
  selectedTranslation
}: TranslationProps) => {
  const { $kodikPlayer } = useKodikPlayerStores()

  const dragControls = useDragControls()

  const { totalTranslatedEpisodes, isSeasonTotalTranslated } =
    useTotalTranslatedEpisodes(translation.translationId)

  const { isHovered, hoverProps } = useHover()

  return (
    <Reorder.Item
      value={translation}
      id={translation}
      dragListener={false}
      dragControls={dragControls}
    >
      <UnstyledButton
        {...hoverProps}
        className={clsx(
          'translations__item',
          selectedTranslation?.id === translation.id &&
            'translations__item_selected'
        )}
        onClick={() => $kodikPlayer.actions.setSelectedTranslation(translation)}
      >
        <div className='flex items-center'>
          <motion.div
            className='overflow-hidden'
            initial={false}
            animate={isHovered ? 'open' : 'closed'}
            variants={{ open: { width: 24 }, closed: { width: 0 } }}
          >
            <IconGripVertical
              className='cursor-grab'
              onPointerDown={(e) => dragControls.start(e)}
            />
          </motion.div>
          <p>{translation.title}</p>
          <p
            className={clsx(
              isSeasonTotalTranslated ? 'text-orange-400' : 'text-red-400',
              'ml-2 text-sm'
            )}
          >
            {isSeasonTotalTranslated
              ? 'Все серии'
              : `${totalTranslatedEpisodes} серий`}
          </p>
        </div>

        <AnimatePresence initial={false}>
          {selectedTranslation?.id === translation.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <SoundWave />
            </motion.div>
          )}
        </AnimatePresence>
      </UnstyledButton>
    </Reorder.Item>
  )
}
