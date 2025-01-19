import { useAtomValue } from 'jotai'

import { BREAKPOINTS } from '@/common/const/breakpoints'
import { $windowAtoms } from '@/common/store/window'

export const useIsMobileHeader = () => {
  const windowWidth = useAtomValue($windowAtoms.windowWidth)
  console.log(windowWidth)
  return windowWidth <= BREAKPOINTS.MD
}
