import { atom } from 'jotai'

import { User } from './user.interface'

export const user = atom<User | null>(null)
