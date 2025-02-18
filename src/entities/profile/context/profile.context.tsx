import { createContext, useContext, useRef } from 'react'

import { createProfileStore } from '../store'
import {
  ProfileContext,
  ProfileContextProviderProps
} from './profile.interface'

const StoreContext = createContext<ProfileContext>(null)

export const ProfileContextProvider = ({
  children,
  user,
  isOwner
}: ProfileContextProviderProps) => {
  const storeRef = useRef<ProfileContext>(null)

  if (!storeRef.current) {
    const $profile = createProfileStore({ user, isOwner })

    storeRef.current = {
      $profile
    }
  }

  return (
    <StoreContext.Provider value={storeRef.current}>
      {children}
    </StoreContext.Provider>
  )
}

export const useProfileStores = () => {
  const store = useContext(StoreContext)

  if (!store) {
    throw new Error('Missing ProfileContextProvider')
  }

  return store
}
