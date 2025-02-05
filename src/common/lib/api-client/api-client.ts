import {
  ApiClientDeleteQueryConfig,
  ApiClientGetQueryConfig,
  ApiClientOptions,
  ApiClientPostQueryConfig,
  ApiClientPutQueryConfig,
  ApiClientResponse
} from './api-client.interface'
import { formatResponse } from './helpers/format-response'

type RequestInterceptor = (
  config: RequestInit & { url: string }
) => RequestInit & { url: string }
type ResponseInterceptor<T = any> = (
  response: ApiClientResponse<T>
) => ApiClientResponse<T>

export class ApiClient {
  private baseUrl: string
  private headers: HeadersInit
  private requestInterceptors: RequestInterceptor[] = []
  private responseInterceptors: ResponseInterceptor[] = []

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl ?? window.location.origin
    this.headers = options.headers ?? {}
  }

  public setHeaders(headers: HeadersInit): void {
    this.headers = headers
  }

  public useRequestInterceptor(interceptor: RequestInterceptor): void {
    this.requestInterceptors.push(interceptor)
  }

  public useResponseInterceptor(interceptor: ResponseInterceptor): void {
    this.responseInterceptors.push(interceptor)
  }

  private async execute<T>(
    method: string,
    url: string,
    config: RequestInit & { searchParams?: Record<string, any>; body?: any }
  ): Promise<ApiClientResponse<T>> {
    let { searchParams, body, ...otherConfig } = config

    let requestUrl = this.normalizeUrl(url, searchParams)

    let requestConfig: RequestInit & { url: string } = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...config.headers
      },
      body: body ? JSON.stringify(body) : undefined,
      ...otherConfig,
      url: requestUrl
    }

    // Применяем все request interceptors
    this.requestInterceptors.forEach((interceptor) => {
      requestConfig = interceptor(requestConfig)
    })

    const response = await fetch(requestConfig.url, requestConfig)

    let formattedResponse = await formatResponse<T>(response)

    // Применяем все response interceptors
    this.responseInterceptors.forEach((interceptor) => {
      formattedResponse = interceptor(formattedResponse)
    })

    return formattedResponse
  }

  public get<T>(url: string, config: ApiClientGetQueryConfig = {}) {
    return this.execute<T>('GET', url, config)
  }

  public post<T>(url: string, config: ApiClientPostQueryConfig = {}) {
    return this.execute<T>('POST', url, config)
  }

  public put<T>(url: string, config: ApiClientPutQueryConfig = {}) {
    return this.execute<T>('PUT', url, config)
  }

  public delete<T>(url: string, config: ApiClientDeleteQueryConfig = {}) {
    return this.execute<T>('DELETE', url, config)
  }

  private normalizeUrl(url: string, searchParams: Record<string, any> = {}) {
    let normalizedUrl = this.baseUrl + url
    if (this.baseUrl.endsWith('/') && url.startsWith('/')) {
      normalizedUrl = this.baseUrl + url.slice(1)
    }
    let resultUrl = new URL(normalizedUrl)
    for (let [key, value] of Object.entries(searchParams)) {
      resultUrl.searchParams.append(key, value)
    }
    return resultUrl.toString()
  }
}
