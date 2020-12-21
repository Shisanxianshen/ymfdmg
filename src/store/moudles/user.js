import request from "@/request"
export default {
  namespaced:true,
  state: {
    info: {},
    cur:[],
  },
  mutations: {
    getInfo(state, data) {
      state.info = data.data
      localStorage.setItem('token', data.token)
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