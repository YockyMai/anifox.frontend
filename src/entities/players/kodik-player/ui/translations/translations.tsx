import { Reorder } from 'framer-motion'
import cloneDeep from 'lodash.clonedeep'
import { useCallback, useMemo } from 'react'

import { $preferredEpisodeTranslations } from '@/entities/translation/store'
import { AnimeEpisodeTranslation } from '@/services/api'

import { useKodikPlayerStores } from '../../context'
import { Translation } from './translation'
import './translations.css'

export const Translations = () => {
  const { $kodikPlayer } = useKodikPlayerStores()

  const preferredTranslations =
    $preferredEpisodeTranslations.selectors.preferredTranslations()
  const selectedEpisode = $kodikPlayer.selectors.selectedEpisode()
  const selectedTranslation = $kodikPlayer.selectors.selectedTranslation()

  const translations = useMemo(() => {
    const translations = cloneDeep(selectedEpisode?.translations ?? [])

    const sorted = translations.sort((a, b) => {
      const aTranslationIndex = preferredTranslations.find(
        ({ translationId }) => translationId === a.id
      )?.index
      const bTranslationIndex = preferredTranslations.find(
        ({ translationId }) => translationId === b.id
      )?.index

      if (!aTranslationIndex && !bTranslationIndex) {
        return 0
      } else if (!aTranslationIndex) {
        return -1
      } else if (!bTranslationIndex) {
        return 1
      }

      return aTranslationIndex - bTranslationIndex
    })

    return sorted
  }, [selectedEpisode?.translations, preferredTranslations])

  const handleReorder = useCallback(
    (values: AnimeEpisodeTranslation[]) =>
      $preferredEpisodeTranslations.actions.reorder(
        values.map(({ id }, index) => ({ index, translationId: id }))
      ),
    []
  )

  return (
    <div className='translations'>
      <Reorder.Group axis='y' onReorder={handleReorder} values={translations}>
        {translations.map((translation) => (
          <Translation
            key={translation.id}
            selectedTranslation={selectedTranslation}
            translation={translation}
          />
        ))}
      </Reorder.Group>
    </div>
  )
}
