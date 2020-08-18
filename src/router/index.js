import VueRouter from "vue-router"
import Vue from "vue"
Vue.use(VueRouter)

const routes = [
  { path: "/", name: "index", component: () => import("@/views") },
]

const routerPath = VueRouter.prototype.push
VueRouter.prototype.push = function(location){
  return routerPath.call(this,location).catch(err => err)
}

const router = new VueRouter({
  mode: "history",
  routes,
})

export default router
