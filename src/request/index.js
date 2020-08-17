/*
type:请求方式
data:传参
header:设置请求头
success:
*/

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
      config.url = config.url + (data ? ("?" + data):'') 
    }
    xhr.open(config.type, config.url, true)
    if (config.type === "post") {
      xhr.setRequestHeader(
        "Content-type",
        `${config.header || "application/x-www-form-urlencoded"}`
      )
      xhr.send(data)
    } else {
      xhr.send(null)
    }
    //
    xhr.onreadystatechange = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        res(JSON.parse(xhr.responseText))
      } else if (xhr.status !== 200) {
        rej(xhr.responseText)
      }
    }
  })
}

const post = async function(url, params, header = null) {
  return $ajax({
    type: "post",
    data: params,
    url: url,
    header: header,
  })
}
const get = async function(url, params, header = null) {
  return $ajax({
    type: "get",
    data: params,
    url: url,
    header: header,
  })
}
export default {
  post,
  get,
}
