import { ApiClientResponse } from '../api-client.interface'

const parseData = async (response: Response) => {
  try {
    const data = await response.json()

    return data
  } catch {
    return undefined
  }
}

export const formatResponse = async <T = any>(
  response: Response
): Promise<ApiClientResponse<T>> => {
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  const data = await parseData(response)

  return getParsedResponseObject(response, data)
}

const getParsedResponseObject = <T>(response: Response, data?: T) => {
  return {
    arrayBuffer: response.arrayBuffer,
    blob: response.blob,
    bodyUsed: response.bodyUsed,
    clone: response.clone,
    formData: response.formData,
    headers: response.headers,
    ok: response.ok,
    redirected: response.redirected,
    statusText: response.statusText,
    text: response.text,
    type: response.type,
    url: response.url,
    data: data as T
  }
}
