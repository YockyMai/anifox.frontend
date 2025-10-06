import { atom } from 'jotai'

import { atomWithDebounce } from '@/common/store/custom-atoms'
import { CharacterRole } from '@/graphql/generated/output'

export const search = atomWithDebounce('')
export const role = atom<CharacterRole | null>(null)
