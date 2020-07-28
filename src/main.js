import Vue from 'vue'
import App from './app.vue'
import '@/static/css/reset.css'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import request from '@/request'
Vue.prototype.$message = Message
Vue.prototype.$ajax = request
new Vue ({
  el:'#app',
  render:h=>h(App),
})
