import {
  baseUrl, //引入baseUrl
} from "./env";
import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 10000; //设置请求时间
axios.defaults.baseURL = baseUrl;//设置默认接口地址
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get(url, params={}) {
  return new Promise((resolve,reject) => {
    axios({
      method: 'get',
      url: url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(params) //使用qs模块(axios中自带),使用qs.stringify()序列化params
    }).then(response => {
      resolve(response.data);
    }).catch(err => {
        reject(err)
    })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
  return new Promise((resolve,reject) => {
    axios({
      method: 'post',
      url: url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(data)
    }).then(response => {
      resolve(response.data);
    },err => {
      reject(err)
    })
  })
}
