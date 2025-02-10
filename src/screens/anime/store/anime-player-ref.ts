import { atom } from 'jotai'
import { RefObject } from 'react'

export const $animePlayerRef = atom<RefObject<HTMLDivElement | null> | null>(
  null
)
