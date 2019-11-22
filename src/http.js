/*
 * @Author: leo
 * @Date: 2019-11-22 14:56:34
 * @Last Modified by: leo
 * @Last Modified time: 2018-10-31 15:24:15
 * axios请求封装
 */
'use strict'

import axios from 'axios'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    // alert(res.msg)
  }
  // if (res.data && (!res.data.success)) {
  //   alert(res.data.error_msg)
  // }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      // 跨域解决在vue.config.js文件
      baseURL: '',
      url,
      params: {
        // 钉钉机器人token,新建时生成,附在url后面
        'access_token': 'a8f4ad1f2fc4f69efc79ac30ef4e02eade372a3703c74a693eab12426ffb73f3'
      },
      data,
      timeout: 10000,
      headers: {}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  getip (url, data) {
    return axios({
      method: 'post',
      // 跨域解决在vue.config.js文件
      baseURL: '',
      url,
      data,
      timeout: 10000,
      headers: {}
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
