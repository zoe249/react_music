import './style.scss'
import Item from './item'

import Login from '@/containers/login'
import Rank from '@/containers/rank'
import Mine from '@/containers/mine'
const tabs = [
  {
    name: '首页',
    icon: 'icon-shouye',
    path: '/home',
    element: <Login />
  },
  {
    name: '排行',
    icon: 'icon-paihangbang_paiming',
    path: '/rank',
    element: <Rank />
  },
  {
    name: '个人',
    icon: 'icon-denglu-copy',
    path: '/mine',
    element: <Mine />
  }
]

export default function tabbar(props: any) {
  return (
    <div className='mine-tabbar'>
      {
        tabs.map(item => {
          return (
            <Item item={item} key={item.path} />
          )
        })
      }
    </div>
  )
}

