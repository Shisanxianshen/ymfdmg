// 登录注册弹窗
<template>
  <div class="user">
    <h2>
        <i @click="show = 1" :class="{'on':show === 1}">登录</i>
        <i @click="show = 2" :class="{'on':show === 2}">注册</i>
    </h2>
    <!-- 登录 -->
    <div class="login" v-if="show === 1">
      <input type="text" placeholder="请输入邮箱号" v-model="email">
      <input type="text" placeholder="请输入密码" v-model="password">
      <button class="btn-hover">登录</button>
    </div>
    <!-- 注册 -->
    <div class="register" v-if="show === 2">
      <input type="text" placeholder="请输入注册邮箱" v-model="email_r">
      <input type="text" placeholder="请输入密码" v-model="password_r">
      <input type="text" placeholder="请确认密码" v-model="confirmPassword_r">
      <button class="btn-hover">注册</button>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    id:{
      type:Number,
      required:true,
    },
  },
  data() {
    return {
      show:1,//1 login 2 register
      email:'',
      password:'',
      email_r:'',
      password_r:'',
      confirmPassword_r:'',
    }
  },
  mounted() {
    this.show = this.id
  },
}
</script>
<style lang="less" scoped>
  .user{
    h2{
      font-size: 0;
      height: 34px;
      i{
        font-size: 18px;
        display: inline-block;
        width: 60px;
        height: 100%;
        text-align: center;
        transition: all .3s;
        cursor: pointer;
        position: relative;
        &:after{
          content: '';
          display: block;
          height: 2px;
          background: #999;
          width: 0;
          position: absolute;
          bottom: 0;
          left: 50%;
          transition: all .3s;
        }
      }
      .on{
        &:after{
          left: 0;
          width: 100%;
        }
      }
    }
  }
  .login,.register{
    input{
      margin-top: 25px;
    }
    button{
      width: 100%;
      height: 40px;
    }
  }

</style>