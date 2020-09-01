// nav
<template>
  <div class="nav">
    <span class="main-l">dmg的个人小站</span>
    <div class="main-r">
      <span
        v-for="(item,index) in pathList"
        :key="index"
        @click="$router.push(item.path)"
      >{{item.name}}</span>
      <span v-if="!Object.keys(info).length">
        <i @click="handleShow(1)">登录</i>/
        <i @click="handleShow(2)">注册</i>
      </span>
      <span v-else class="info">
        <i>{{info.name}}</i>/<i @click="loginOut">退出</i>      
      </span>
    </div>
    <!-- 登录弹窗 -->
    <el-dialog
      :visible.sync="showLogin"
      width="400px"
      :modal-append-to-body="false"
      custom-class="dialog-login"
      :close-on-click-modal="false"
    >
      <login :id="id" v-if="showLogin"/>
    </el-dialog>
  </div>
</template>
<script>
import login from '@/components/login'
export default {
  components: {
    login,
  },
  data() {
    return {
      pathList: [
        { name: '首页', path: '/' },
        { name: '前端园地', path: '/123' },
        { name: '博文', path: '/' },
        { name: '杂谈', path: '/' },
      ],
      showLogin: false,
      id: 1,
    }
  },
  computed: {
    info(){
      if(Object.keys(this.$store.state.info).length){
        this.showLogin = false
      }
      return this.$store.state.info
    }
  },
  created() {
    this.$store.dispatch('getUserInfo')
  },
  methods: {
    handleShow(id) {
      this.id = id
      this.showLogin = true
    },
    loginOut(){
      localStorage.removeItem('token')
      this.$store.commit('deleInfo')
    }
  },
}
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  height: 60px;
  border-bottom: 1px solid #999;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  font-size: 20px;
  background: #2b3a42;
  color: #999;
  .main-l {
    width: 300px;
    font-weight: bold;
  }
  .main-r {
    flex: auto;
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    span {
      height: 40px;
      line-height: 40px;
      margin: 0 20px;
      cursor: pointer;
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: #999;
        transition: width 0.3s;
      }
      &:hover {
        &::after {
          width: 100%;
        }
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
      i {
        &:hover {
          color: skyblue;
        }
      }
    }
    .info{
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>