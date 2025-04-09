import { useParams } from 'react-router'

import { useProfileQuery } from '@/graphql/generated/output'
import { ProfilePageParams } from '@/screens/profile/profile.interface'

export const useProfile = () => {
  const { login } = useParams<ProfilePageParams>()

  const { data, loading, error } = useProfileQuery({
    variables: {
      login: login!
    }
  })

  const profile = data?.profile

  return {
    profile,
    loading,
    error
  }
}
