import { ReactNode } from 'react'

import { UserLiteFragment } from '@/graphql/generated/output'

export type UserCardProps = {
  user: UserLiteFragment
  actions?: ReactNode
}
