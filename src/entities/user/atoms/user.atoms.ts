import { atom } from 'jotai'
import { selectAtom } from 'jotai/utils'

import { User } from './user.interface'

export const user = atom<User | null>(null)

export const isAuth = selectAtom(user, (user) => !!user)
