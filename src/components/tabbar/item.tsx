import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './style.scss'

export default function tabbar(props: any) {
  const { item } = props
  const router = useNavigate()
  let path = useLocation()
  if(item.path === '/') {
    path.pathname = '/home'
  }

  const toPath = (item: any) => {
    router(item.path)
  }
  return (

    <div
      onClick={() => toPath(item)}
      className={`${item.path === path.pathname ? 'item active-item' : 'item'}`}
      key={item.icon}
    >
      <div className={`iconfont ${item.icon}`}>
      </div>
      <div className="name">{item.name}</div>
    </div>
  )
}

