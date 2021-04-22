const getParameterByName = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
    results = regex.exec(window.location.search)
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
const getAllparams = () => {
  const url = window.location.href, param = {}
  if (url.indexOf('?') != -1) {
    url.split('?')[1].split(/[&#]/).forEach(function (param_str) {
      (function () {
        param[this[0]] = decodeURIComponent(this[1])
      }).call(param_str.split('='))
    })
  }
  return param
}

const initRPX = () => {
  const docEl = document.documentElement
  const clientWidth = docEl.clientWidth
  // alert(clientWidth)
  docEl.style.fontSize = ((clientWidth >= 640 ? 640 : clientWidth) / 7.5) + 'px'
}

export {
  getParameterByName,
  getAllparams,
  initRPX,
}
