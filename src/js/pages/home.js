import '../../less/page/home.less'
const incomeController = (() => {
  const animationClasses = ['polygon-bl-br', 'polygon-br-bl', 'polygon-tr-br', 'polygon-br-tr', 'polygon-bl-tl', 'polygon-tl-bl', 'polygon-tl-tr', 'polygon-tr-tl']
  const linkArray = [
    { title: '概况介绍', url: 'https://www.vzhuo.com' },
    { title: '课程', url: 'https://www.vzhuo.com' },
    { title: '管理层', url: 'https://www.vzhuo.com' },
    { title: '覆盖范围域', url: 'https://www.vzhuo.com' },
    { title: '项目', url: 'https://www.vzhuo.com' },
    { title: '新闻', url: 'https://www.vzhuo.com' },
  ]
  const swiperArray = [
    {
      introduce: '小小心愿',
      title: '你来到这里的最大的心愿是什么呢？先来说一说吧！',
      summary: '详细的说出来，你来到这里的最大的心愿是什么呢？先来说一说吧！',
      img: 'https://be-prod.ggeedu.it/naba/entities/page/20210401_SAP_header.jpg',
      url: ''
    },
    {
      introduce: '来自灵魂',
      title: '你来到这里的最大的心愿是什么呢？先来说一说吧！',
      summary: '来到这里的最大的心愿是什么呢？先来说一说吧！',
      img: 'https://be-prod.ggeedu.it/naba/entities/page/20210301_QS_ranking.jpg',
      url: ''
    },
    {
      introduce: '不二神探',
      title: '梦想的未来！！',
      summary: '详细的说出来，你来到这里的最大的心愿是什么呢？先来说一说吧！slkfjdlsjfdlsjd三六九等放假了课时精练奖励金',
      img: 'https://be-prod.ggeedu.it/naba/entities/page/yakult-header.jpg',
      url: ''
    },
    {
      introduce: '小小心愿',
      title: '你来到这里的最大的心愿是什么呢？先来说一说吧！',
      summary: '详细的说出来，你来到这里的最大的心愿是什么呢？先来说一说吧！',
      img: 'https://be-prod.ggeedu.it/naba/entities/page/20201215_summer-header.jpg',
      url: ''
    }
  ]
  const contentHtml =
    `<div class="page-wrap" id="page-home">
      <div class="content-wrap top-head-wrap">
        <div class="content-inner-wrap">
          <img class="logo-img" src="https://s.vzhuo.com/static/imgs/logo_color.png" />
          <div class="head-link-wrap">
            ${linkArray.map((item, index) => {
      return `<a href="${item.url}" class="head-link-item">${item.title}</a>${index % 2 ? '<br />' : ''}`
    }).join('')}
          </div>
          <div class="head-right-wrap">
            <a class="btn-normal">预约</a>
            <a class="btn-normal">联系我们</a>
            <a class="btn-normal">立即申请</a>
          </div>
        </div>
      </div>
      <div class="content-wrap top-gallery-wrap">
        <div class="content-inner-wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              ${swiperArray.map((item, index) => {
                          return `<div class="swiper-slide swiper-slide-${index + 1}">
                            <div class="gallery-text">
                              <p class="introduce-text">${item.introduce}</p>
                              <p class="top-title">${item.introduce}</p>
                              <p class="summary-des">${item.summary}</p>
                              <a class="btn-normal">了解更多</a>
                            </div>
                            <div class="pic-wrap">
                              <img src="${item.img}" />
                            </div>
                          </div>`
                        }).join('')}
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>`

  const bindActions = () => {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // autoplay:true,//等同于以下设置
      speed: 400,
      autoplay: {
        delay: 4000
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      on: {
        slideChangeTransitionStart: function () {
          // $('.swiper-slide-' + this.activeIndex + ' .pic-wrap img').removeClass()
        },
        slideChangeTransitionEnd: function () {
          // $('.swiper-slide-' + this.activeIndex + ' .pic-wrap img').addClass(animationClasses[Math.floor(Math.random() * 8)])
        },
      }
    })
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
