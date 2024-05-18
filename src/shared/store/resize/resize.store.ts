import { createModel } from '@/shared/lib/store'

import { OnChangeWindowSizePayload, ResizeStore } from './resize.interface'

const initialState: ResizeStore = {
  height: window.innerHeight,
  width: window.innerWidth
}

export const $resizeModel = createModel({
  initialState,
  actions: {
    onChangeWindowSize: (state, payload: OnChangeWindowSizePayload) => {
      state.width = payload.width
      state.height = payload.height
    }
  }
})
