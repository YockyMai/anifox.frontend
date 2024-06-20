import { ApiClientResponse } from '../api-client.interface'

export const formatResponse = async <T = any>(
  response: Response
): Promise<ApiClientResponse<T>> => {
  const data = (await response.json()) as T

  return {
    ...response,
    data
  }
}
