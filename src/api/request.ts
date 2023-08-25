import axios from './axios'
import type { AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
const instance = axios()

/**
 * @Description: 网络请求
 *
 * @param
 * @return
 */
export default {
  get<T>(
    url: string,
    params?: unknown,
    headers?: AxiosRequestHeaders
  ): Promise<Response<T>> {
    const options: AxiosRequestConfig = {}
    if (params) options.params = params
    if (headers) options.headers = headers
    return instance.get(url, options)
  },
}

// request.get('/api' + 'banner')
