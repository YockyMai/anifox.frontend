import { Select } from '@anifox/ui'
import { useAtom } from 'jotai'

import { AnimeSeasons } from '@/services/api'
import { $animeCatalogFilterAtoms } from '@/widgets/anime-catalog/model'

import { SEASON_OPTIONS } from './season.const'

export const Season = () => {
  const [season, setSeason] = useAtom($animeCatalogFilterAtoms.season)

  return (
    <div>
      <Select
        value={season}
        onValueChange={(option) =>
          setSeason(option ? (option.value as AnimeSeasons) : null)
        }
        options={SEASON_OPTIONS}
        placeholder={'Любой'}
        label={'Сезон'}
      />
    </div>
  )
}
