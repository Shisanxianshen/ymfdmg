import Vue from "vue"
import App from "./app.vue"
import "@/static/css/reset.css"
import "element-ui/lib/theme-chalk/index.css"
import request from "@/request"
import router from "@/router"
import store from "@/store"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import './utils/element'
import 'highlight.js/styles/vs2015.css'
import hl from 'highlight.js'
Vue.use(mavonEditor)
Vue.prototype.$ajax = request
// 代码块指令
let vm = new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
})

// 自定义一个代码高亮指令
Vue.directive('highlight', function (el) {
  const blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hl.highlightBlock(block)
  })
})

Vue.prototype.changeTime = function(str) {
  let count = new Date(str).getTime()
  return new Date(count).toLocaleString()
}
