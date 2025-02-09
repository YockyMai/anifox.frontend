import { useMutation } from '@tanstack/react-query'

import { api, SetAnimeStatusParams } from '@/services/api'

export const useAnimeStatusMutation = () =>
  useMutation({
    mutationFn: async (params: SetAnimeStatusParams) => {
      const data = await api.setAnimeStatus(params)

      return data
    }
  })
