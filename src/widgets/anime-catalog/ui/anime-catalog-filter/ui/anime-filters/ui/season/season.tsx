import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'

import { AnimeSeasons } from '@/services/api'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog/context/anime-catalog.context'

import { SEASON_OPTIONS } from './season.const'

export const Season = () => {
  const { $filter } = useAnimeCatalogStores()
  const season = $filter.selectors.season()

  return (
    <div>
      <Select
        value={season}
        onValueChange={(option) =>
          $filter.actions.setSeason(
            option ? (option.value as AnimeSeasons) : null
          )
        }
        options={SEASON_OPTIONS}
        placeholder={'Любой'}
        label={'Сезон'}
      />
    </div>
  )
}
