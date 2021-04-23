import { getTopHeadHtml } from '../utils/page-helper'
const incomeController = (() => {
  const contentHtml = `<div class="page-wrap" id="page-about-us">
      ${getTopHeadHtml()}
      <div class="content-wrap top-gallery-wrap">
        <div class="content-inner-wrap">
          
        </div>
      </div>
      <div class="content-wrap area-gallery-wrap">
        <div class="content-inner-wrap">
          <div class="block-title">Areas</div>
        </div>
      </div>
      <div class="content-wrap news-content-wrap">
        <div class="content-inner-wrap">
          <div class="block-title">News</div>
          
        </div>
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
