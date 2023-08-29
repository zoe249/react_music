import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { login } from './api'
import './style.scss'

export default function loginComponent() {
  const router = useNavigate()

  const [phone, setPhone] = useState('17860382907')
  const [password, setPassword] = useState('qq1421759951')

  const inputPhone = (e: React.FormEvent<HTMLInputElement>) => setPhone((e.target as HTMLInputElement).value)

  const inputPassword = (e: React.FormEvent<HTMLInputElement>) => setPassword((e.target as HTMLInputElement).value)

  const handleLogin = () => {
    login({ phone, password }).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        localStorage.setItem('token', res.token)
        localStorage.setItem('cookie', res.cookie)
        localStorage.setItem('userInfo', JSON.stringify(res.profile))
        router('/home')
      }
    })


  }
  return (
    <div className='login-wrap page'>
      <div className="login-box">
        <div className="avator">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201702%2F01%2F20170201223022_KEVAr.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1695699086&t=bff3cc49d8da42e72fa358cab5ef55bf" alt="" />
        </div>
        <div className="Phone form-item">
          <i className='iconfont icon-yonghu'></i>
          <input type="text" placeholder='请输入用户名' value={phone} onInput={(e) => inputPhone(e)} />
        </div>
        <div className="password form-item">
          <i className='iconfont icon-mima1'></i>
          <input type='password' placeholder='请输入密码' value={password} onInput={(e) => inputPassword(e)} />
        </div>
        <div className="btn" onClick={handleLogin}>登录</div>
      </div>
    </div>
  )
}
