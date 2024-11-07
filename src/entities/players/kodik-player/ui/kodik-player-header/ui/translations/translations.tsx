import { useOutsideClick } from '@anifox/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { useAtom, useAtomValue } from 'jotai'
import { useState } from 'react'

import { SoundWave, UnstyledButton } from '@/common/components'
import { $kodikPlayerAtoms } from '@/entities/players/kodik-player/store/kodik-player'

import { useSelectorAnimation } from '../../hooks'
import './translations.css'

export const Translations = () => {
  const [isOpen, setIsOpen] = useState(false)

  const selectedEpisode = useAtomValue($kodikPlayerAtoms.selectedEpisodeAtom)
  const [selectedTranslation, setSelectedTranslation] = useAtom(
    $kodikPlayerAtoms.selectedTranslationAtom
  )

  const { scope, startCloseAnimation, startOpenAnimation } =
    useSelectorAnimation({
      listNode: '.translations__list',
      rootNode: '.translations',
      toHeight: 48 * (selectedEpisode?.translations.length ?? 0),
      toWidth: 200
    })

  const onChangeTranslationsOpen = (isOpen: boolean) => {
    setIsOpen(isOpen)

    if (isOpen) {
      startOpenAnimation()
    } else {
      startCloseAnimation()
    }
  }

  useOutsideClick(scope, () => {
    setIsOpen(false)
  })

  if (!selectedEpisode) return null

  return (
    <div ref={scope} onClick={() => onChangeTranslationsOpen(!isOpen)}>
      <div className='translations'>
        <UnstyledButton className='translations__button'>
          <SoundWave />
          {selectedTranslation ? (
            <p>{selectedTranslation.title}</p>
          ) : (
            <p>Озвучки</p>
          )}

          <IconChevronDown className='translations__button__icon' />
        </UnstyledButton>

        <div className='translations__list'>
          {selectedEpisode.translations.map((translation) => (
            <div key={translation.id}>
              <UnstyledButton
                className='translations__list__translation'
                onClick={() => {
                  setSelectedTranslation(translation)
                }}
              >
                {translation.title}
              </UnstyledButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
