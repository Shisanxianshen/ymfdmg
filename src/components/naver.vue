// nav
<template>
  <div class="nav">
    <span class="main-l">dmg的菜园子</span>
    <div class="main-r">
      <span
        v-for="(item, index) in pathList"
        :key="index"
        @click="$router.push(item.path)"
        >{{ item.name }}</span
      >
      <span v-if="!Object.keys(info).length">
        <i @click="handleShow(1)">登录</i>/
        <i @click="handleShow(2)">注册</i>
      </span>
      <span v-else class="info">
        <i class="headstyle" @click="showImg = true">
          <img :src="headSrc || info.head" alt="" v-if="headSrc || info.head" />
          <img src="@/static/img/head.jpg" alt="" v-else />
          {{ info.name }} </i
        >/
        <i @click="loginOut">退出</i>
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
      <login :id="id" v-if="showLogin" />
    </el-dialog>
    <el-dialog
      :visible.sync="showImg"
      width="400px"
      :modal-append-to-body="false"
      :close-on-click-modal="false"
      :destroy-on-close="true"
    >
      <div class="head-w">
        <div class="head-box">
          <img :src="headSrc || info.head" alt="" v-if="headSrc || info.head" />
        </div>
        <div class="upload-btn btn-hover" @click="$refs.upload.click()">
          <span>点击上传</span>
        </div>
        <input
            type="file"
            name="file"
            id="head"
            class="btn"
            ref="upload"
            @change="handleHead"
            multiple="multiple"
            style="display: none;"
          />
      </div>

      上传一个你的头像，兄弟！
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
      showImg: false,
      id: 1,
      headSrc: '',
    }
  },
  computed: {
    info() {
      if (Object.keys(this.$store.state.user.info).length) {
        this.showLogin = false
      }
      return this.$store.state.user.info
    },
  },
  created() {
    this.$store.dispatch('user/getUserInfo')
  },
  methods: {
    async handleHead(e) {
      if (this.check(e.target.files[0].name, e.target.files[0].size)) {
        const formdata = new FormData()
        formdata.append('file', e.target.files[0])
        const data = await this.$ajax.post(
          `/user/setHead/${this.$store.state.user.info.id}`,
          formdata,
          'noheader'
        )
        if (data.code === 0) {
          this.$message.success('上传成功')
          this.headSrc = data.headSrc
        }
      }
    },
    handleShow(id) {
      this.id = id
      this.showLogin = true
    },
    loginOut() {
      localStorage.removeItem('token')
      this.$store.commit('user/deleInfo')
    },
    check(type, size) {
      if (!/(.jpg|.png|.jpeg|.gif)/.test(type)) {
        this.$message.error('只允许上传图片类型')
        return false
      }
      if (size > 1024 * 1024 * 2) {
        this.$message.error('上传头像不可以超过2M')
        return false
      }
      return true
    },
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
  z-index: 1;
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
    .info {
      color: #fff;
      font-size: 16px;
      display: flex;
      i {
        &:first-child {
          display: inline-block;
          width: 150px;
          text-align: right;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          &:hover {
            color: #fff;
          }
          img {
            vertical-align: middle;
            margin-right: 5px;
            width: 30px;
            height: 30px;
            border-radius: 15px;
          }
        }
      }
    }
  }
}
.head-box {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  img {
    width: 100%;
    height: 100%;
  }
}
.head-w {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .upload-btn {
    width: 80px;
    height: 30px;
    background: #3eaf7c;
    color: #fff;
    border-radius: 6px;
    margin-left: 30px;
    position: relative;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }
}
</style>