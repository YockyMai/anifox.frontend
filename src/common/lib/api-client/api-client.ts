import path from 'path'
import queryString from 'querystring'

import {
  ApiClientDeleteQueryConfig,
  ApiClientGetQueryConfig,
  ApiClientOptions,
  ApiClientPostQueryConfig,
  ApiClientPutQueryConfig,
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
    config: ApiClientGetQueryConfig = {}
  ): Promise<ApiClientResponse<T>> {
    const { searchParams, ...otherConfig } = config

    const requestUrl = this.normalizeUrl(url, searchParams)

    const response = await fetch(requestUrl, {
      headers: { ...this.headers, ...config.headers },
      ...otherConfig
    })

    return await formatResponse<T>(response)
  }

  public async post<T>(
    url: string,
    config: ApiClientPostQueryConfig = {}
  ): Promise<ApiClientResponse<T>> {
    const { body, searchParams, ...otherConfig } = config

    const requestUrl = this.normalizeUrl(url, searchParams)

    const response = await fetch(requestUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...config.headers
      },
      body: JSON.stringify(body),
      ...otherConfig
    })

    return await formatResponse<T>(response)
  }

  public async put<T>(
    url: string,
    config: ApiClientPutQueryConfig = {}
  ): Promise<ApiClientResponse<T>> {
    const { body, searchParams, ...otherConfig } = config

    const requestUrl = this.normalizeUrl(url, searchParams)

    const response = await fetch(requestUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.headers,
        ...config.headers
      },
      body: JSON.stringify(body),
      ...otherConfig
    })

    return await formatResponse<T>(response)
  }

  public async delete<T>(
    url: string,
    config: ApiClientDeleteQueryConfig = {}
  ): Promise<ApiClientResponse<T>> {
    const { searchParams, ...otherConfig } = config

    const requestUrl = this.normalizeUrl(url, searchParams)

    const response = await fetch(requestUrl, {
      method: 'DELETE',
      headers: { ...this.headers, ...config.headers },
      ...otherConfig
    })

    return await formatResponse<T>(response)
  }

  private normalizeUrl(url: string, searchParams: Record<string, any> = {}) {
    let normalizedUrl = this.baseUrl + url

    if (this.baseUrl.endsWith('/') && url.startsWith('/')) {
      normalizedUrl = this.baseUrl + url.slice(1)
    }

    let resultUrl = new URL(normalizedUrl)

    // append params
    for (let [key, value] of Object.entries(searchParams)) {
      resultUrl.searchParams.append(key, value)
    }

    return resultUrl.toString()
  }
}
