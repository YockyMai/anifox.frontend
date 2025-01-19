import { atom } from 'jotai'

export const windowWidth = atom(
  typeof window !== 'undefined' ? window.innerWidth : 500
)
export const windowHeight = atom(
  typeof window !== 'undefined' ? window.innerHeight : 1080
)
