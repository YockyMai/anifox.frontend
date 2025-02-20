import { createStore } from '@anifox/store'

import { PREFERRED_TRANSLATIONS_KEY } from './preferred-translations.const'
import { PreferredTranslation } from './preferred-translations.interface'

export const $preferredEpisodeTranslations = createStore(
  {
    preferredTranslations: [] as PreferredTranslation[]
  },
  {
    reorder: (state, newTranslations: PreferredTranslation[]) => {
      const result: { index: number; translationId: number }[] = []
      const added = new Set<number>()

      // Заполняем result новыми переводами, сохраняя их порядок
      newTranslations.forEach((item, i) => {
        result.push({ index: i, translationId: item.translationId })
        added.add(item.translationId)
      })

      // Добавляем старые переводы, если их ещё нет в новом массиве
      state.preferredTranslations.forEach((item) => {
        if (!added.has(item.translationId)) {
          result.push({
            index: result.length,
            translationId: item.translationId
          })
          added.add(item.translationId)
        }
      })

      state.preferredTranslations = result
    }
  },
  { persist: { name: PREFERRED_TRANSLATIONS_KEY } }
)
