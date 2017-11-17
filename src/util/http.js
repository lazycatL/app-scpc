import axios from 'axios'
var instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true,
  transformRequest: [function transformRequest (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
})
// 请求拦截（配置发送请求的信息）
instance.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  return config
}, function (error) {
  // 请求失败的处理
  return Promise.reject(error)
})

// 响应拦截（配置请求回来的信息）
instance.interceptors.response.use(function (response) {
  // 处理响应数据
  return response
}, function (error) {
  // 处理响应失败
  return Promise.reject(error)
})
export default {

  ajaxGet () {
    let args = arguments
    switch (typeof args[1]) {
      case 'underfiend' :
        args[1] = []
        args[2] = undefined
        break
      case 'function' :
        args[2] = args[1]
        args[1] = []
        break
      case 'object' :
        if (args.length < 2) {
          args[2] = undefined
        }
        break
    }
    instance.get(args[0], args[1])
      .then(args[2])
      .catch(err => {
        console.log(err)
      })
  },
  ajaxPost (api, params, cb) {
    instance.post(api, params)
      .then(cb)
      .catch(err => {
        console.log(err)
      })
  }
}
