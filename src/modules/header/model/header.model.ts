import { createModel } from '@/shared/lib/store'

import { HeaderModel } from './header.interface'

export const $headerModel = createModel<HeaderModel>({
  initialState: {
    isTransparent: false,
    hidden: false,
    color: null
  },
  actions: {
    setIsTransparent: (state, transparent: boolean) => {
      state.isTransparent = transparent
    },
    setHidden: (state, hidden: boolean) => {
      state.hidden = hidden
    },
    changeHeaderColor: (state, color: string) => {
      state.color = color
    },
    resetHeaderColor: (state) => {
      state.color = null
    }
  }
})
