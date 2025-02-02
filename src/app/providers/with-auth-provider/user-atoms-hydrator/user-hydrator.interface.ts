import { ReactNode } from 'react'

import { User } from '@/entities/user/atoms/user.interface'

export type UserAtomsHydratorProps = {
  children: ReactNode
  user: User | null
}
