<template>
  <div class="bg-wrap">
    <div class="bg"></div>
  </div>
</template>
<style lang="less" scoped>
.bg-wrap {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
}
.bg {
  height: 70%;
  margin: 120px auto 0;
  background: url('~@/static/img/404.png') no-repeat center top;
  background-size: auto 100%;
  z-index: 100;
}
</style>