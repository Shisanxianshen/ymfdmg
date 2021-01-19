// 前端园地
<template>
  <div class="main">
    <nav class="tabs">
      <div class="list">
        <span v-for="(item, index) in tabs" :key="index">
          {{ item.name }}
        </span>
      </div>
    </nav>
    <div class="list-wrap" >

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [
        { name: '全部', link: '' },
        { name: '前端手写合集', link: '' },
        { name: 'vue源码解析', link: '' },
        { name: '奇妙的css', link: '' },
        { name: 'http基础知识', link: '' },
        { name: 'koa2基础应用', link: '' },
        { name: '网站部署相关', link: '' },
      ],
    }
  },
}
</script>
<style lang="less" scoped>
.main{
  padding-top: 60px;
  padding-bottom: 20px;
  background: #f4f5f5;
  min-height: 100vh;
  box-sizing: border-box;
}
.tabs {
  width: 100%;
  position: sticky;
  top: 0;
  background: #fff;
  height: 50px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  .list{
    width: 1200px;
    margin: 0 auto;
    color: #71777c;
    font-size: 14px;
    display: flex;
    align-items:center;
    height: 100%;
    span{
      margin: 0 10px;
      cursor: pointer;
      &:hover{
        color: #3eaf7c;
      }
    }
  }
}
.list-wrap{
  width: 1200px;
  margin: 20px auto;
}
</style>