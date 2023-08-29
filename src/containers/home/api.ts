import http from '@/api/request'
// console.log(http)

/** 首页轮播图 */
const getBanners = <T>() => {
  return http.get<T>('/banner')
}

/** 首页-发现-圆形图标入口列表 */
const getDragonBall = <T>() => {
  return http.get<T>('/homepage/dragon/ball')
}

/** 新歌速递 */
const getTopSong = <T>(type: string = '0') => {
  return http.get<T>('/top/song?type=' + type)
}

export { getBanners, getDragonBall, getTopSong }
