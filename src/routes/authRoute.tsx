import { Navigate, LazyRouteFunction } from 'react-router-dom'
import { lazy } from 'react'

// 路由鉴权组件
const Appraisal = ({ children }: any) => {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to='/login' />
}

// export default Appraisal