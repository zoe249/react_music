import { Navigate, LazyRouteFunction } from 'react-router-dom'
import { lazy } from 'react'

// 路由鉴权组件
const Appraisal = ({ children }: any) => {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to='/login' />
}


// const lazyLoad = (moduleName: string) => {
//   return lazy(() => import(`../contaniners/${moduleName}`));
//   // return Module
// };

// interface Router {
//   name?: string
//   path: string
//   children?: Array<Router>
//   element: any
// }

import Rank from '@/containers/rank/index'
import Home from '@/containers/home/index'
import Mine from '@/containers/mine/index'
import SearchPage from '@/containers/search/index'

const routes: Array<Router> = [
  {
    path: '/search',
    // element: import('@/containers/search/index')
    element: SearchPage
  },
  {
    path: '/home',
    // element: import('@/containers/home/index')
    element: Home
  },
  {
    path: '/mine',
    // element: import('@/containers/mine/index'),
    element: Mine
  },
  {
    path: '/rank',
    // element: import('@/containers/rank/index')
    element: Rank
  }
]



export default routes