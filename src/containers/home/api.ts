import request from '@/api/request'

const getBanners = <T>() => {
  return request.get<T>('/banner')
}

export { getBanners }
