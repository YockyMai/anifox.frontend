import { useHydrateAtoms } from 'jotai/utils'

import { $userAtoms } from '@/entities/user/atoms'

import { UserAtomsHydratorProps } from './user-hydrator.interface'

export const UserAtomsHydrator = ({
  children,
  user
}: UserAtomsHydratorProps) => {
  useHydrateAtoms([[$userAtoms.user, user]])

  return children
}
