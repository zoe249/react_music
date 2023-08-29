import myRequest from './request/index'

const http = new myRequest({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    },
  },
})

export default http
