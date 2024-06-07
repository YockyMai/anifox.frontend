import { createModel } from '@/shared/lib/store'

import { HeaderModel } from './header.interface'

const initialState: HeaderModel = {
  isTransparent: false,
  isVisible: true,
  color: null
}

export const $headerModel = createModel({
  initialState,
  actions: {
    setIsTransparent: (state, transparent: boolean) => {
      state.isTransparent = transparent
    },
    changeVisibility: (state, isVisible: boolean) => {
      state.isVisible = isVisible
    },
    changeHeaderColor: (state, color: string) => {
      state.color = color
    },
    resetHeaderColor: (state) => {
      state.color = null
    }
  }
})
