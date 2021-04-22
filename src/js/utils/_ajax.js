import _utils from './_utils'
import router from './_router'

const SERVICE_DOMAIN_STRING = 'https://web.zhinikefu.com'
//const SERVICE_DOMAIN_STRING = 'https://test.qunsou.co'
const ajaxGet = (params) => {
  params.data.time = new Date().getTime()
  params.data.token = localStorage.token
  $.ajax({
    type: 'GET',
    url: SERVICE_DOMAIN_STRING + params.url,

    contentType: 'application/json;charset=UTF-8',
    dataType: 'json',
    data: params.data,
    success: (data) => {
      if (data && (data.sta == 0 || data.status == 0)) {
        params.scb && params.scb(data)
        return
      }
      if (resolve4001(data)) {
        return
      }
      params.fcb && params.fcb(data)
    },
    error: (xhr, errorType, res) => {
      params.fcb && params.fcb(res)
    },
    complete: (res) => {
      params.ccb && params.ccb(res)
    }
  })
}
const resolve4001 = (data) => {
  if (data && data.errcode == 4001) {
    const phoneUrl = localStorage.phoneUrl
    if (phoneUrl && localStorage.openidUrl && $.cookie('pw_' + phoneUrl)) {
      localStorage.redirectAction = _utils.getParameterByName('action') || ''
    }
    router.push({ action: 'login', noHistory: true })
    return true
  }
}
const ajaxPost = (params) => {
  params.data.token = localStorage.token
  $.ajax({
    url: SERVICE_DOMAIN_STRING + params.url,
    method: 'POST',
    data: JSON.stringify(params.data),
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      if (data && (data.sta == 0 || data.status == 0)) {
        params.scb && params.scb(data)
        return
      }
      if (resolve4001(data)) {
        return
      }
      params.fcb && params.fcb(data)
    },
    error: function (res) {
      params.fcb && params.fcb(res)
    },
    complete: (res) => {
      params.ccb && params.ccb(res)
    }
  })
}

export default {

  getData: ajaxGet,
  postData: ajaxPost,
}
