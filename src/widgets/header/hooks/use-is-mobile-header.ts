import { useWindowWidth } from '@anifox/ui'

import { BREAKPOINTS } from '@/common/const/breakpoints'

export const useIsMobileHeader = () => {
  const windowWidth = useWindowWidth()

  return windowWidth <= BREAKPOINTS.MD
}
