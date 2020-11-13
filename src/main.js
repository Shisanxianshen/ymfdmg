/*
 * @des: 
 */
import Vue from "vue"
import App from "./app.vue"
import "@/static/css/reset.css"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import request from "@/request"
import "highlight.js/styles/atom-one-light.css"
import router from "@/router"
import store from "@/store"
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(ElementUI)
Vue.use(mavonEditor)
Vue.prototype.$ajax = request
// 代码块指令
let vm = new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
})

Vue.directive("code", {
  bind: function(el) {
    let codebox = el.querySelector("pre")
    // 存在pre标签则创建代码块
    if (codebox) {
      let copybtn = document.createElement("span")
      copybtn.innerText = "复制代码"
      copybtn.classList = "copy"
      copybtn.onclick = function() {
        let selection = window.getSelection()
        selection.removeAllRanges()
        let range = document.createRange()
        range.selectNodeContents(codebox) // 需要选中的dom节点
        selection.addRange(range)
        document.execCommand("Copy")
        vm.$message.success("复制成功")
      }
      codebox.appendChild(copybtn)
    }
  },
})
Vue.prototype.changeTime = function(str) {
  let count = new Date(str).getTime()
  return new Date(count).toLocaleString()
}
