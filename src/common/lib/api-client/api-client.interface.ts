export type ApiClientOptions = {
  baseUrl?: string
  headers?: HeadersInit
}

export type ApiClientResponse<T> = {
  arrayBuffer: () => Promise<ArrayBuffer>
  blob: () => Promise<Blob>
  bodyUsed: boolean
  clone: () => Response
  formData: () => Promise<FormData>
  headers: Headers
  ok: boolean
  redirected: boolean
  statusText: string
  text: () => Promise<string>
  type: ResponseType
  url: string
  data: T
}

export type ApiClientQueryConfig = {
  searchParams?: Record<string, any>
} & RequestInit

export type ApiClientGetQueryConfig = Omit<ApiClientQueryConfig, 'body'>

export type ApiClientPostQueryConfig = {
  body?: any
} & Omit<ApiClientQueryConfig, 'body'>

export type ApiClientDeleteQueryConfig = ApiClientGetQueryConfig

export type ApiClientPutQueryConfig = {
  body?: any
} & Omit<ApiClientQueryConfig, 'body'>
