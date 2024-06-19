import path from 'path'
import queryString from 'querystring'

import {
  ApiClientGetConfig,
  ApiClientOptions,
  ApiClientResponse
} from './api-client.interface'
import { formatResponse } from './helpers/format-response'

export class ApiClient {
  private baseUrl: string
  private headers: HeadersInit

  constructor(options: ApiClientOptions) {
    this.baseUrl = options.baseUrl ?? window.location.origin
    this.headers = options.headers ?? {}
  }

  public setHeaders(headers: HeadersInit): void {
    this.headers = headers
  }

  public async get<T>(
    url: string,
    config: ApiClientGetConfig = {}
  ): Promise<ApiClientResponse<T>> {
    const requestUrl = this.normalizeUrl(url)

    const { params, ...otherConfig } = config

    const paramsString = queryString.stringify(params)
    console.log(paramsString)
    const response = await fetch(
      requestUrl + paramsString.length ? `/?${paramsString}` : '',
      {
        headers: { ...this.headers, ...config.headers },
        ...otherConfig
      }
    )

    return formatResponse<T>(response)
  }

  public async post<T>(
    url: string,
    data: any = {},
    config: RequestInit = {}
  ): Promise<ApiClientResponse<T>> {
    const requestUrl = this.normalizeUrl(url)

    const response = await fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...config.headers
      },
      body: JSON.stringify(data),
      ...config
    })

    return formatResponse<T>(response)
  }

  public async put<T>(
    url: string,
    data: any = {},
    config: RequestInit = {}
  ): Promise<ApiClientResponse<T>> {
    const response = await fetch(path.join(this.baseUrl, url), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...config.headers
      },
      body: JSON.stringify(data),
      ...config
    })

    return formatResponse<T>(response)
  }

  public async delete<T>(
    url: string,
    config: RequestInit = {}
  ): Promise<ApiClientResponse<T>> {
    const response = await fetch(path.join(this.baseUrl, url), {
      method: 'DELETE',
      headers: { ...this.headers, ...config.headers },
      ...config
    })

    return formatResponse<T>(response)
  }

  private normalizeUrl(url: string) {
    if (this.baseUrl.endsWith('/') && url.startsWith('/')) {
      return this.baseUrl + url.slice(1)
    }

    return this.baseUrl + url
  }
}
