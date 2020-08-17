import Vue from "vue"
import App from "./app.vue"
import "@/static/css/reset.css"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import request from "@/request"
import hljs from "highlight.js"
import "highlight.js/styles/atom-one-light.css"

Vue.use(ElementUI)
Vue.prototype.$ajax = request
// 代码高亮指令
Vue.directive("highlight", {
  update: function (el) {
    hljs.highlightBlock(el.children[0])
  },
})

new Vue({
  el: "#app",
  render: (h) => h(App),
})
