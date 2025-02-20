import { $windowSize } from '@anifox/ui'

import { BREAKPOINTS } from '@/common/const/breakpoints'

import { DesktopFilter } from './desktop-filter'
import { MobileFilter } from './mobile-filter'

export const AnimeListFilters = () => {
  const windowWidth = $windowSize.selectors.width()

  return (
    <>{windowWidth < BREAKPOINTS.XL ? <MobileFilter /> : <DesktopFilter />}</>
  )
}
