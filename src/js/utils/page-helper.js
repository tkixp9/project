import {
  topLinkArray
} from '../config/home_config'

const getTopHeadHtml = (params) => {
  return `
  <div class="content-wrap top-head-wrap">
    <div class="content-inner-wrap">
      <a href="/?action=home"><img class="logo-img" src="https://s.vzhuo.com/static/imgs/logo_color.png" /></a>
      <div class="head-link-wrap">
        ${topLinkArray.map((item, index) => {
          return `<a href="${item.url}" class="head-link-item">${item.title}</a>${index % 2 ? '<br />' : ''}`}).join('')
        }
      </div>
      <div class="head-right-wrap">
        <a class="btn-normal">预约</a>
        <a class="btn-normal" href="/?action=about_us">联系我们</a>
        <a class="btn-normal">立即申请</a>
      </div>
    </div>
  </div>`
}

export {
  getTopHeadHtml,
}
