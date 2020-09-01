import Vuex from 'vuex'
import Vue from 'vue'
import request from '@/request'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    info:{},
  },
  mutations:{
    getInfo(state,data){
      state.info = data
    },
    deleInfo(state){
      state.info = {}
    }
  },
  actions:{
    async getUserInfo(context){
      const data = await request.get('/getUserInfo', {}, {}, false)
      if(data.code === 0){
        context.commit('getInfo',data.data)
      }
      return data
    }
  }
})

export default store