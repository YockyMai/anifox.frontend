import { atom } from 'jotai'

export const windowWidth = atom(
  typeof window !== 'undefined' ? window.innerWidth : 1920
)
export const windowHeight = atom(
  typeof window !== 'undefined' ? window.innerHeight : 1080
)
