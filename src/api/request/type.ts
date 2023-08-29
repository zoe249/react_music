import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface myrequestInterceptors {
  requestInterceptor?: (config: any) => any
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface myRequestConfig extends AxiosRequestConfig {
  // timeout?: number
  // loading?: boolean
  baseURL?: string
  interceptors?: myrequestInterceptors
}
