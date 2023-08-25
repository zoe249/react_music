/// <reference types="vite/client" />

declare interface Response<T> {
  code: number | string
  msg: string
  message: string
  data: T
  [key]: any
}
