import { useState } from 'react'
import './style.scss'
import { setItem, getItem } from '@/utils/cache'

/**
 * 切换系统主题色
 */
export default function Dark() {
  const localDark = (getItem('theme') === 'dark') ? true : false
  const [dark, setDark] = useState(localDark)
  const modelBtn = () => {
    if (!dark) {
      window.document.documentElement.setAttribute('data-theme', 'dark')
      // 将当前的主题色配置存储到本地
      setItem('theme', 'dark')
    } else {
      window.document.documentElement.setAttribute('data-theme', 'light')
      setItem('theme', 'light')
    }
    setDark(!dark)
  }
  return (
    <div className='dark-btn'>
      <div className="btn" onClick={modelBtn}>模式切换</div>
    </div>
  )
}

/**
 * 初始化
 */
const init = () => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
  isDarkTheme.addEventListener('change',function (e){
    const theme = e.matches ? 'dark' : 'light'
    setItem('theme', theme)
    setThemeHandler()
  })
  setThemeHandler()
}
init()

// 获取本地当前的主题色
function setThemeHandler(){
  if (getItem('theme') === 'dark') {
    window.document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    window.document.documentElement.setAttribute('data-theme', 'light')
  }
}
