import '../../less/page/home.less'
import {
  topLinkArray,
  swiperOverviewArray,
  swiperAreaArray,
  newsArray
} from '../config/home_config'
import { getTopHeadHtml } from '../utils/page-helper'
const incomeController = (() => {
  const animationClasses = ['polygon-bl-br', 'polygon-br-bl', 'polygon-tr-br', 'polygon-br-tr', 'polygon-bl-tl', 'polygon-tl-bl', 'polygon-tl-tr', 'polygon-tr-tl']
  const animationAreaClasses = ['polygon-area-bl-br', 'polygon-area-br-bl', 'polygon-area-tr-br', 'polygon-area-br-tr', 'polygon-area-bl-tl', 'polygon-area-tl-bl', 'polygon-area-tl-tr', 'polygon-area-tr-tl']

  const contentHtml =
    `<div class="page-wrap" id="page-home">
      ${getTopHeadHtml()}
      <div class="content-wrap top-gallery-wrap">
        <div class="content-inner-wrap">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              ${swiperOverviewArray.map((item, index) => {
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
      <div class="content-wrap area-gallery-wrap">
        <div class="content-inner-wrap">
          <div class="block-title">Areas</div>
          <div class="swiper-container-area">
            <div class="swiper-wrapper">
              ${swiperAreaArray.map((item, index) => {
                return `<div class="swiper-slide swiper-slide-area-${index + 1}">
                          <a>
                            <div class="pic-wrap">
                              <img class="${animationClasses[Math.floor(Math.random() * 8)]}" src="${item.img}" />
                              <div class="area-des">${item.title}</div>
                            </div>
                          </a>
                        </div>`
              }).join('')}
            </div>
          </div>
        </div>
      </div>
      <div class="content-wrap news-content-wrap">
        <div class="content-inner-wrap">
          <div class="block-title">News</div>
          <div class="news-block-wrap">
            ${newsArray.map((item) => {
              return `<div class="news-block">
                <img class="news-img" src="${item.img}"/>
                <div class="news-title">${item.title}</div>
                <div class="news-summary">${item.summary}</div>
                <a class="btn-normal">了解更多</a>
              </div>`
            }).join('')}
          </div>
        </div>
      </div>
    </div>`

  const bindActions = () => {
    const swiper = new Swiper('.swiper-container', {
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
          console.log('tkyj+222++', this.activeIndex)
          $('.swiper-slide-' + this.activeIndex + ' .pic-wrap img').removeClass()
        },
        slideChangeTransitionEnd: function () {
          // $('.swiper-slide-' + this.activeIndex + ' .pic-wrap img').addClass('polygon-bl-br')
          $('.swiper-slide-' + this.activeIndex + ' .pic-wrap img').addClass(animationClasses[Math.floor(Math.random() * 8)])
        },
      }
    })

    const slidesPerView = 4
    const areaSwiper = new Swiper('.swiper-container-area', {
      loop: false, // 循环模式选项
      speed: 400,
      autoplay: { delay: 4000 },
      slidesPerView,
      on: {
        slideChangeTransitionStart: function () {
          let result
          if (this.activeIndex === 0) {
            const array = []
            for (let i = 0; i < slidesPerView; i++) {
              array.push('.swiper-slide-area-' + i + ' img')
            }
            result = array.join(',')
          } else {
            result = '.swiper-slide-area-' + (this.activeIndex + slidesPerView - 1) + ' img'
          }
          console.log('tkyj+aaa++', this.activeIndex)
          $(result).removeClass()
        },
        slideChangeTransitionEnd: function () {
          let result
          if (this.activeIndex === 0) {
            for (let i = 0; i < slidesPerView; i++) {
              $('.swiper-slide-area-' + i + ' img').addClass(animationAreaClasses[Math.floor(Math.random() * 8)])
            }
          } else {
            $('.swiper-slide-area-' + (this.activeIndex + slidesPerView - 1) + ' img').addClass(animationAreaClasses[Math.floor(Math.random() * 8)])
          }
          console.log('tkyj+bbb++', this.activeIndex)
          // $(result).addClass('polygon-area-tr-tl')
          // $(result).addClass(animationAreaClasses[Math.floor(Math.random() * 8)])
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
