import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 30000,
})

export default function () {
  return http
}
