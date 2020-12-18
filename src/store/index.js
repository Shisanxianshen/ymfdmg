import Vuex from "vuex"
import Vue from "vue"
import user from './moudles/user'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{
    user
  }
})

export default store
