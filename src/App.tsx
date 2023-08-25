import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import routes from '@/routes'
import '@/assets/style/App.scss'
import Layout from './layout'
import login from './containers/login'

function App() {
  let path = useLocation()
  return path.pathname === '/login' ? <Routes>
    <Route path='/login' Component={login} />
  </Routes> : <Layout />
}

export default App
