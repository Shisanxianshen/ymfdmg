import Vue from "vue"
import App from "./app.vue"
import "@/static/css/reset.css"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import request from "@/request"
import hljs from "highlight.js"
import "highlight.js/styles/atom-one-light.css"
import router from '@/router'
import store from '@/store'
Vue.use(ElementUI)
Vue.prototype.$ajax = request
// 代码块指令
Vue.directive("highlight", {
  bind: function (el) {
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach(item =>{
      hljs.highlightBlock(item)
    })
  },
})
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
})
