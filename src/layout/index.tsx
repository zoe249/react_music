import { Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import routes from '@/routes'
import '@/assets/style/App.scss'
import Tabbar from '@/components/tabbar'
import Dark from '@/components/dark'
import Audio from '@/components/audio'
import login from '@/containers/login'

function Layout() {
  const token = localStorage.getItem('token')
  const router = useNavigate()
  useEffect(() => {
    // 判断是否登录
    if (!token) return router('/login')
  })
  return (
    <div id='DarkModelPage'>
      <Dark />
      <Audio />
      <Routes>
        {
          token
            ?
            routes.map((item: any) => <Route key={item.path} path={item.path} Component={item.element} />)
            :
            <Route path='/login' Component={login} />
        }
      </Routes>
      <Tabbar />
    </div>

  )
}

export default Layout
