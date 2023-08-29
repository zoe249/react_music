import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { myRequestConfig, myrequestInterceptors } from './type'

export default class Request {
  instance: AxiosInstance
  interceptors?: myrequestInterceptors
  baseurl?: string

  constructor(config?: myRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config && config.interceptors
    this.baseurl = config?.baseURL
    // this.loading = config.loading
    // this.timeout = config.timeout

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  /** 添加拦截器 */

  request<T>(config: myRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res: any) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(url: string, config?: myRequestConfig): Promise<T> {
    return this.request<T>({ url, ...config, method: 'GET' })
  }

  post<T>(url: string, config?: myRequestConfig): Promise<T> {
    return this.request<T>({ url, ...config, method: 'POST' })
  }

  delete<T>(url: string, config?: myRequestConfig): Promise<T> {
    return this.request<T>({ url, ...config, method: 'delete' })
  }

  patch<T>(url: string, config?: myRequestConfig): Promise<T> {
    return this.request<T>({ url, ...config, method: 'patch' })
  }
}
