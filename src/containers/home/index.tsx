import { useEffect, useState, useCallback } from 'react'
import request from '@/api/request'
import { getBanners, getDragonBall, getTopSong } from './api'
import SearchComponent from '@/components/searchComponent'
import AudioCopmonent from '@/components/audio'
import { getSongUrl } from '@/api/common'
import store from '@/store'
import { changeUpdateMusic } from '@/store/music/actionCreators'
import './style.scss'

const Home: React.FunctionComponent = () => {
  const [banners, setBanners] = useState([])
  let [currentIndex, setCurrentIndex] = useState(0)
  let bannerLength = 0
  useEffect(() => {
    getBanners().then((res: any) => {
      setBanners(res.banners);
      bannerLength = res.banners.length
    })
    setInterval(() => {
      currentIndex === bannerLength - 1 ? currentIndex = 0 : currentIndex++
      // setCurrentIndex(currentIndex)
    }, 3000)
  }, [])

  return (
    <div className='home-wrap page'>
      {/* <SearchComponent /> */}
      <div className='banner-wrap' style={{ width: (banners as Array<any>).length * 100 + 'vw' }}>
        {
          banners.map((item: any, index: number) => {
            return currentIndex === index ? (
              <div className='banner-item' key={item.imageUrl}>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </div>
            ) : []
          })
        }
      </div>

      <DragonBall />
      <TopSong />

      {/* <AudioCopmonent /> */}
    </div>
  )
}

const DragonBall: React.FunctionComponent = () => {
  const [dragonBall, setDragonBall] = useState([])
  useEffect(() => {
    getDragonBall().then((res: any) => {
      if (res.code === 200) {
        setDragonBall(res.data)
      }
    })
  }, [])

  const handleDragon = (data: any) => {


    // console.log(store.getState());
  }

  return (
    <div className='dragon-wrap'>
      {
        dragonBall.map((item: any) => {
          return (
            <div className='dragon-item' key={item.id} onClick={() => handleDragon(item)}>
              <div className="icon">
                <img src={item.iconUrl} alt="" />
              </div>
              <div className="label">{item.name}</div>
            </div>
          )
        })
      }
    </div>
  )
}

const TopSong: React.FunctionComponent = () => {
  const [songs, setSong] = useState([])
  useEffect(() => {
    getTopSong('0').then((res: any) => {
      if (res.code === 200) {
        setSong(res.data.splice(0, 3))
      }
    })
  }, [])

  const handleSong = (item: any) => {
    const musicData = {
      id: item.id,
      name: item.name,
      author: item.artists[0].name,
      picUrl: item.album.blurPicUrl,
      duration: item.duration
    }
    store.dispatch(changeUpdateMusic(musicData))
  }

  return (
    <div className='topsong-wrap'>
      <div className="title">新歌速递</div>
      {
        songs.map((item: any) => {
          return (
            <div className='song-item' key={item.id} onClick={() => handleSong(item)}>
              <img src={item.album.blurPicUrl} alt="" />
              <div className="text">
                <span className='white bold font13'>{item.name}</span>
                <span className='name'>{item.artists[0].name}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home