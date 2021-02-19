import request from "@/request"
export default {
  namespaced:true,
  state: {
    info: {},
    cur:[],
  },
  mutations: {
    getInfo(state, data) {
      if(data.data){
        state.info = data.data
      }
    },
    deleInfo(state) {
      state.info = {}
    },
  },
  actions: {
    async getUserInfo(context) {
      const data = await request.get("/getUserInfo", {}, {}, false)
      if (data.code === 0) {
        context.commit("getInfo", data)
      }
      return data
    },
  },
}