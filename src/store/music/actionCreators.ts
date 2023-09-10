import { CHANGE_UPDATE } from './constrants'
import { getSongUrl } from '@/api/common'
import { musicType } from './types'

/**
 * 播放音乐的action
 */
export const changeUpdateMusic = (musicData: musicType): any => {
  return (dispath: Function) => {
    getSongUrl(musicData.id!).then((res: any) => {
      musicData.musicUrl = res.data[0].url
      dispath({
        type: CHANGE_UPDATE,
        ...musicData,
      })
    })
  }
}
