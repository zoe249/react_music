import { useEffect, useState } from 'react'
import React from 'react'
import request from '@/api/request'
import { getBanners, getDragonBall } from './api'
import SearchComponent from '@/components/searchComponent'
import './style.scss'

export default function home() {
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
      setCurrentIndex(currentIndex)
    }, 3000)
  }, [])

  return (
    <div className='home-wrap page'>
      <SearchComponent />
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
    </div>
  )
}

function DragonBall() {
  const [dragonBall, setDragonBall] = useState([])
  useEffect(() => {
    getDragonBall().then((res: any) => {
      if (res.code === 200) {
        setDragonBall(res.data)
      }
    })
    console.log('渲染');

  }, [])

  const handleDragon = (data: any) => {
    console.log(data);

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
