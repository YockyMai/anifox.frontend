import { SoundWave, UnstyledButton } from '@anifox/ui'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useAtom, useAtomValue } from 'jotai'

import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'

import './translations.css'

export const Translations = () => {
  const selectedEpisode = useAtomValue($kodikPlayerAtoms.selectedEpisodeAtom)
  const [selectedTranslation, setSelectedTranslation] = useAtom(
    $kodikPlayerAtoms.selectedTranslationAtom
  )

  if (!selectedEpisode) return null

  return (
    <div className='translations'>
      {selectedEpisode.translations.map((translation) => (
        <UnstyledButton
          key={translation.id}
          className={clsx(
            'translations__item',
            selectedTranslation?.id === translation.id &&
              'translations__item_selected'
          )}
          onClick={() => {
            setSelectedTranslation(translation)
          }}
        >
          <p>{translation.title}</p>

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
      ))}
    </div>
  )
}
