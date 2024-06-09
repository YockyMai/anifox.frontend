import { createModel } from '@/shared/lib/store'

import { HeaderModel } from './header.interface'

const initialState: HeaderModel = {
  isVisible: true,
  isTransparent: false
}

export const $headerModel = createModel({
  initialState,
  actions: {
    setVisibility: (state, isVisible: boolean) => {
      state.isVisible = isVisible
    },
    setIsTransparent: (state, isTransparent: boolean) => {
      state.isTransparent = isTransparent
    }
  }
})
