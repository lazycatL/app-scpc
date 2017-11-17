import axios from '../util/http'

// const host = 'http://172.16.161.41:8089/scpc/' // 请求后台服务器地址
// const isMock = true;// 是否使用mock来模拟数据

// const urls = {
//   loginUrl: '/login.action',
//   getJgzxDataUrl: '/pcgl_getBomGygcJgVue.action?'
// }

const urls = {
  loginUrl: '/login',
  getJgzxDataUrl: '/pcgl_getBomGygcJgVue.action?'
}

export default {
  login (params, success) {
    return axios.ajaxPost(urls.loginUrl, params, success)
  },
  getJgzxData (params, success) {
    return axios.ajaxGet(urls.getJgzxDataUrl + params, success)
  }
}
