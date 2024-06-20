export type ApiClientOptions = {
  baseUrl?: string
  headers?: HeadersInit
}

export type ApiClientResponse<T> = {
  data: T
} & Omit<Response, 'json'>

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
