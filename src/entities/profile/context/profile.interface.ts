import { ReactNode } from 'react'

import { User } from '@/entities/viewer'

import { createProfileStore } from '../store'

export type ProfileContext = {
  $profile: ReturnType<typeof createProfileStore>
} | null

export type ProfileContextProviderProps = {
  children: ReactNode
  user: User
  isOwner: boolean
}
