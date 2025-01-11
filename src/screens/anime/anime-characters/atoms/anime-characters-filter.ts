import { atom } from 'jotai'

import { atomWithDebounce } from '@/common/store/custom-atoms'

export const search = atomWithDebounce('')
export const role = atom<string | null>(null)
