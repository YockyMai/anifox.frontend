import { User } from '@/entities/viewer/atoms/user.interface'

export type ProfileStore = {
  user: User
  isOwner: boolean
}

export type InitProfilePayload = {
  user: User
  isOwner: boolean
}
