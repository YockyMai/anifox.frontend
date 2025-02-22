import { useStore } from '@anifox/store'

import { $viewer } from './viewer.store'

export const useIsAuth = () => useStore($viewer.store, (state) => !!state.user)
