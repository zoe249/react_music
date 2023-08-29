import http from '@/api/request'
// console.log(http)

const login = <T>(data: any) => {
  return http.get<T>(
    `/login/cellphone?phone=${data.phone}&password=${data.password}`,
    data
  )
}

const sendCode = <T>(phone: string) => {
  console.log(phone)

  return http.get<T>('/captcha/sent?phone=' + phone)
}

const captchaVerify = <T>(data: { phone: string; captcha: string }) => {
  return http.get<T>(
    `/captcha/verify?phone=${data.phone}&captcha=${data.captcha}`
  )
}
const isLogin = <T>() => {
  return http.get<T>('/login/refresh')
}

export { sendCode, captchaVerify, isLogin, login }
