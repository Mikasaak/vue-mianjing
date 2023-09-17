import axios from 'axios'
import { Toast } from 'vant'
import { setToken } from '@/utils/localStorage.js'

const instance = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.data.token) {
    setToken(response.data.data.token)
  }
  return response
}, function (error) {
  console.log(error)
  if (error.response) {
    Toast.fail(error.response.data.message)
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance