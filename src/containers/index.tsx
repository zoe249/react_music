import { Routes, Route } from 'react-router-dom'
import routes from '@/routes'
import '@/assets/style/App.scss'
import Tabbar from '@/components/tabbar'
import Dark from '@/components/dark'
import Audio from '@/components/audio'

function App() {
  return (
    <div id='DarkModelPage'>
      <Dark />
      <Audio />
      <Routes>
        {
          routes.map((item: any) => (<Route key={item.path} path={item.path} Component={item.element}></Route>))
        }
      </Routes>
      <Tabbar />
    </div>

  )
}

export default App
