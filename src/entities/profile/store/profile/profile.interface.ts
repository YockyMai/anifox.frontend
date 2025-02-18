import { User } from '@/entities/user/atoms/user.interface'

export type ProfileStore = {
  user: User
  isOwner: boolean
}

export type InitProfilePayload = {
  user: User
  isOwner: boolean
}
