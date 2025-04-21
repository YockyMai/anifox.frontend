import { useAtomValue } from 'jotai'
import { useEffect } from 'react'

import { COOKIES } from '@/common/const'
import { $signupAtoms } from '@/entities/auth/signup'
import { $viewer } from '@/entities/viewer'
import { client } from '@/graphql/client'
import {
  SignupDocument,
  SignupMutation,
  ViewerFragment
} from '@/graphql/generated/output'

export const useCreateAccount = (
  onSuccess: () => void,
  onError: () => void
) => {
  const birthday = useAtomValue($signupAtoms.birthday)
  const email = useAtomValue($signupAtoms.email)
  const login = useAtomValue($signupAtoms.login)
  const password = useAtomValue($signupAtoms.password)

  useEffect(() => {
    const signup = async () => {
      try {
        const { data } = await client.mutate<SignupMutation>({
          mutation: SignupDocument,
          variables: {
            email,
            login,
            name: login,
            password,
            birthday
          }
        })

        const { user, tokens } = data!.signup

        localStorage.setItem(COOKIES.ACCESS_TOKEN_KEY, tokens.accessToken)
        localStorage.setItem(COOKIES.REFRESH_TOKEN_KEY, tokens.refreshToken)

        const viewer: ViewerFragment = user

        $viewer.actions.setViewer(viewer)

        onSuccess()
      } catch (e) {
        onError()
      }
    }

    signup()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
