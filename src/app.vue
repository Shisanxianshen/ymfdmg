// 个人网站
<template>
  <div class="app">
    <naver />
    <router-view></router-view>
    <div class="footer">
      <a href="http://beian.miit.gov.cn/" target="_blank">鄂ICP备20014730号</a>
    </div>
  </div>
</template>
<script>
import naver from '@/components/naver'
export default {
  components: {
    naver,
  },
}
</script>
<style lang="less">
.app {
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 60px;
  .footer {
    text-align: center;
    width: 100%;
    font-size: 14px;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #eaecef;
    a {
      color: #999;
    }
  }
  pre {
    max-width: 800px;
    code {
      background: #e9ecef;
      border-radius: 5px;
      white-space: pre-line;
      &::-webkit-scrollbar {
        border-radius: 3px;
        height: 5px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: #999;
      }
    }
  }
}
.el-dialog__header {
  padding: 0 !important;
}
.el-dialog__body {
  padding: 15px 20px 25px!important;
}
.el-dialog__headerbtn{
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0;
}
input {
  outline: none;
  border: 1px solid #999;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding: 0 13px !important;
  &:focus {
    border-color: #666;
  }
  &:hover {
    border-color: #666;
  }
}
button{
  background: #3eaf7c;
  border: 0;
  outline: none;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
