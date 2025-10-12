import { createStore } from '@anifox/store'

const initialStore = {
  step: 1,
  email: ''
}

export const $resetPasswordForm = createStore(initialStore, {
  incrementStep: (state) => {
    state.step += 1
  },
  decrementStep: (state) => {
    state.step -= 1
  },
  setEmail: (state, email: string) => {
    state.email = email
  }
})
