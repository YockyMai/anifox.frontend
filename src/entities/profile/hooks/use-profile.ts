import { useParams } from 'react-router'

import { $viewer } from '@/entities/viewer'
import { useProfileQuery } from '@/graphql/generated/output'
import { ProfilePageParams } from '@/screens/profile/profile.interface'

export const useProfile = () => {
  const viewer = $viewer.selectors.viewer()
  const { login } = useParams<ProfilePageParams>()

  const { data, loading, error } = useProfileQuery({
    variables: {
      login: login!
    }
  })

  const profile = data?.profile

  return {
    profile: profile!,
    isOwner: viewer?.login === login,
    loading,
    error
  }
}
