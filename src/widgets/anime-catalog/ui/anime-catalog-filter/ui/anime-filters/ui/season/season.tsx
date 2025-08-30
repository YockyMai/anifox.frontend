import { Select } from '@anifox/ui'

import { AnimeSeason } from '@/graphql/generated/output'
import { useAnimeCatalogStores } from '@/widgets/anime-catalog'

import { SEASON_OPTIONS } from './season.const'

export const Season = () => {
  const { $filter, changeSearchParams } = useAnimeCatalogStores()
  const season = $filter.selectors.season()

  return (
    <Select
      value={season}
      onValueChange={(option) => {
        const season = option ? (option.value as AnimeSeason) : null

        $filter.actions.setSeason(season)
        changeSearchParams({ season })
      }}
      options={SEASON_OPTIONS}
      placeholder={'Любой'}
      label={'Сезон'}
    />
  )
}
