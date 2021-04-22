import '../../less/page/home.less'
const incomeController = (() => {
  const linkArray = [
    { title: '概况介绍', url: 'https://www.vzhuo.com' },
    { title: '课程', url: 'https://www.vzhuo.com' },
    { title: '管理层', url: 'https://www.vzhuo.com' },
    { title: '覆盖范围域', url: 'https://www.vzhuo.com' },
    { title: '项目', url: 'https://www.vzhuo.com' },
    { title: '新闻', url: 'https://www.vzhuo.com' },
  ]
  const contentHtml =
    `<div class="page-wrap" id="page-home">
      <div class="content-wrap top-head-wrap">
        <div class="content-inner-wrap">
          <img class="logo-img" src="https://s.vzhuo.com/static/imgs/logo_color.png" />
          <div class="head-link-wrap">
            ${linkArray.map((item) => {
              return `<a href="${item.url}" class="head-link-item">${item.title}</a>`
            })}
          </div>
          <div class="head-right-wrap">
            <a class="btn-normal">预约</a>
            <a class="btn-normal">联系我们</a>
            <a class="btn-normal">立即申请</a>
          </div>
        </div>
      </div>
      <div class="develop-container">
        <img src="https://static.zhinikefu.com/fans/static/images/developing.png" />
        开发中，敬请期待...
      </div>
    </div>`

  const bindActions = () => {
  }
  return {
    init: (params) => {
      $('.app-wrap').empty().append(contentHtml)
      bindActions()
    }
  }
})()

const start = (params) => {
  params = params || {}
  incomeController.init(params)
}
export default {
  start,
}
