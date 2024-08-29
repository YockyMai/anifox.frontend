import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

import {
  SIGNUP_BIRTHDAY_KEY,
  SIGNUP_EMAIL_KEY,
  SIGNUP_LOGIN_KEY,
  SIGNUP_NICKNAME_KEY,
  SIGNUP_STEP_KEY
} from './signup.const'

export const step = atomWithStorage(SIGNUP_STEP_KEY, 1)

export const email = atomWithStorage(SIGNUP_EMAIL_KEY, '')
export const login = atomWithStorage(SIGNUP_LOGIN_KEY, '')
export const nickname = atomWithStorage(SIGNUP_NICKNAME_KEY, '')
export const birthday = atomWithStorage(SIGNUP_BIRTHDAY_KEY, '')
export const password = atom('')
