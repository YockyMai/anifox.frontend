import { IconChevronDown } from '@tabler/icons-react'
import { useAtom, useAtomValue } from 'jotai'
import React from 'react'

import { Popover, UnstyledButton } from '@/common/components'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'

import './translations.css'

export const Translations = () => {
  const selectedEpisode = useAtomValue($kodikPlayerAtoms.selectedEpisodeAtom)
  const [selectedTranslation, setSelectedTranslation] = useAtom(
    $kodikPlayerAtoms.selectedTranslationAtom
  )

  if (!selectedEpisode) return null

  return (
    <Popover
      withoutArrow
      trigger={
        <UnstyledButton className='anime-translations-trigger'>
          {/* <SoundWave /> */}
          {selectedTranslation ? (
            <p>{selectedTranslation.title}</p>
          ) : (
            <p>Озвучки</p>
          )}

          <IconChevronDown />
        </UnstyledButton>
      }
    >
      <div>
        {selectedEpisode.translations.map((translation) => (
          <div key={translation.id}>
            <UnstyledButton
              onClick={() => {
                setSelectedTranslation(translation)
              }}
            >
              {translation.title}
            </UnstyledButton>
          </div>
        ))}
      </div>
    </Popover>
  )
}
