'use client'

import { IconChevronDown } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAtomValue } from 'jotai'

import { Image } from '@/common/components'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'

import { episodesButtonAnimations } from './episodes-button.animations'
import './episodes-button.css'

export const EpisodesButton = () => {
  const selectedEpisode = useAtomValue($kodikPlayerAtoms.selectedEpisodeAtom)

  if (!selectedEpisode) return null

  return (
    <AnimatePresence key={selectedEpisode.number}>
      <div className='episodes__button'>
        <motion.div
          initial={episodesButtonAnimations.image.initial}
          animate={episodesButtonAnimations.image.animate}
          exit={episodesButtonAnimations.image.exit}
        >
          <Image
            alt=''
            src={selectedEpisode.image}
            className='episodes__button__image'
          />
        </motion.div>

        <motion.div
          initial={episodesButtonAnimations.title.initial}
          animate={episodesButtonAnimations.title.animate}
          exit={episodesButtonAnimations.title.exit}
        >
          <p>
            {selectedEpisode.number}. {selectedEpisode?.title}
          </p>
        </motion.div>

        <IconChevronDown className='anime-episodes-episode__icon' />
      </div>
    </AnimatePresence>
  )
}
