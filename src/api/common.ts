import http from './request'

export const getSongUrl = <T>(id: string | number) => {
  return http.get<T>('/song/url?id=' + id)
}
