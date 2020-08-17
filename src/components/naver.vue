// nav
<template>
  <div class="nav">
    <span class="main-l">dmg的个人小站</span>
    <div class="main-r">
      <span>前端园地</span>
      <span>博文</span>
      <span>杂谈</span>
      <span>
        <i>注册</i>/
        <i>登录</i>
      </span>
    </div>
  </div>
</template>
<script>
export default {}
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
  }
}
</style>