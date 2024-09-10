'use client'

import { useAtom, useAtomValue } from 'jotai'

import { $userAtoms } from '@/entities/user/atoms'

const Home = () => {
  const user = useAtomValue($userAtoms.user)

  return <div></div>
}

export default Home
