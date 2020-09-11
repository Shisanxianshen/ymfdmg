/*
type:请求方式
data:传参
header:设置请求头
success:
*/
import { Message } from "element-ui";
const baseUrl =
  process.env.NODE_ENV === "development" ? "http://192.168.22.39:3011" : "http://39.106.174.56:3011"

function $ajax(config) {
  return new Promise((res, rej) => {
    let xhr = new XMLHttpRequest()
    let query = [],
      data
    if (config.data) {
      Object.keys(config.data).forEach((item) => {
        query.push(`${item}=${config.data[item]}`)
      })
    }
    data = query.join("&")
    if (config.type === "get") {
      config.url = config.url + (data ? "?" + data : "")
    }
    xhr.open(config.type, config.url, true)
    // 设置token
    xhr.setRequestHeader(
      "Authorization",
      localStorage.getItem('token') || ''
    )
    if (config.type === "post") {
      xhr.setRequestHeader(
        "Content-type",
        `${config.header || "application/x-www-form-urlencoded"}`
      )
      xhr.send(data)
    } else {
      xhr.send(null)
    }
    // 响应
    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        // 响应拦截配置
        let data = JSON.parse(xhr.responseText)
        if(data.msg && config.msg){
          Message.error(data.msg)
        }
        res(JSON.parse(xhr.responseText))
      } else if (xhr.status !== 200) {
        rej(xhr.responseText)
      }
    }
  })
}

const post = async function(url, params, header = null, msg = true) {
  return $ajax({
    type: "post",
    data: params,
    url: baseUrl + url,
    header: header,
    msg:msg,
  })
}
const get = async function(url, params, header = null, msg = true) {
  return $ajax({
    type: "get",
    data: params,
    url: baseUrl + url,
    header: header,
    msg:msg,
  })
}
export default {
  post,
  get,
}
