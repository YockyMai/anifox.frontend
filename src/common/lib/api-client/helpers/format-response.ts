import { ApiClientResponse } from '../api-client.interface'

export const formatResponse = <T = any>(
  response: Response
): ApiClientResponse<T> => {
  const data = response.json() as T

  return {
    ...response,
    data
  }
}
