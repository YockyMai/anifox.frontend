import { ApiClient } from '@/common/lib/api-client'

export const publicHttp = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL
})
