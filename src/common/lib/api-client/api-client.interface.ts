export type ApiClientOptions = {
  baseUrl?: string
  headers?: HeadersInit
}

export type ApiClientResponse<T> = {
  data: T
} & Omit<Response, 'json'>

export type ApiClientGetConfig = {
  params?: Record<string, any>
} & RequestInit
