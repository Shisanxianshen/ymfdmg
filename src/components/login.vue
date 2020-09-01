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
      <button class="btn-hover" @click="login_fn">登录</button>
    </div>
    <!-- 注册 -->
    <div class="register" v-if="show === 2">
      <div class="email-w">
        <input type="text" placeholder="请输入注册邮箱" v-model="email_r">
        <span @click="sendEmail" v-if="cur === 60">发送邮件</span>
        <span v-if="cur < 60" class="close">{{cur}}s</span>
      </div>
      <input type="text" placeholder="请输入邮箱验证码" v-model="code">
      <input type="text" placeholder="请输入昵称" v-model="name">
      <input type="text" placeholder="请输入密码" v-model="password_r">
      <input type="text" placeholder="请确认密码" v-model="confirmPassword_r">
      <button class="btn-hover" @click="register_fn">注册</button>
    </div>
  </div>
</template>
<script>
import reg from '@/utils/reg'
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
      code:'',
      name:'',
      cur:60,
      timer:null,
    }
  },
  mounted() {
    this.show = this.id
    this.$emit('update:showLogin',false)
  },
  methods: {
    // 登录
    async login_fn(){
      if(this.email === ''){
        this.$message.error('请输入邮箱') 
        return
      }
      if(this.password === ''){
        this.$message.error('请输入密码') 
        return
      }
      let data = await this.$ajax.post('/user/login',{email:this.email,password:this.password})
      if(data.code === 0){
        this.$message.success('登录成功')
        localStorage.setItem('token',data.token)
        this.$store.dispatch('getUserInfo')
      }
    },
    // 注册
    async register_fn(){
      if(!reg.MAIL_CHECK(this.email_r)){
        this.$message.error('请输入正确的邮箱') 
        return
      }
      if(!reg.PASSWORD_CHECK(this.password_r)){
        this.$message.error('请输入6-20位包含数字和英文的密码') 
        return
      }
      if(this.password_r !== this.confirmPassword_r){
        this.$message.error('两次密码输入不一致') 
        return
      }
      if(this.name === ''){
        this.$message.error('昵称不能为空') 
        return
      }
      const data = await this.$ajax.post('/user/register',{
        email:this.email_r,
        password:this.password_r,
        code:this.code,
        name:this.name,
      })
      if(data.code === 0){
        this.$message.success('注册成功')
        localStorage.setItem('token',data.token)
        this.$store.dispatch('getUserInfo')
      }
    },
    // 发送邮件
    async sendEmail(){
      if(this.email_r === ''){
        this.$message.error('请输入正确的邮箱') 
        return
      }
      if(!reg.MAIL_CHECK(this.email_r)){
        this.$message.error('请输入正确的邮箱') 
        return
      }
      const data = await this.$ajax.post('/user/getCode',{email:this.email_r,})
      if(data.code === 0){
        this.timer = setInterval(()=>{
          this.cur--
          if(this.cur === 0){
            this.cur = 60
            clearInterval(this.timer)
          }
        },1000)
      }
    }
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
    .email-w{
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      input{
        width: 70%;
        margin-top: 0;
      }
      span{
        background: #3eaf7c;
        border-radius: 5px;
        text-align: center;
        line-height: 40px;
        width: 25%;
        color: #fff;
        cursor: pointer;
        transition: all .3s;
        &:hover{
          opacity: .9;
        }
      }
      .close{
        filter: grayscale(100%);
      }
    }
  }

</style>