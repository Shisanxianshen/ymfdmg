// 前端园地
<template>
  <div class="main">
    <nav class="tabs">
      <div class="list">
        <span
          v-for="(item, index) in tabs"
          :key="index"
          :class="{
            on:
              item.tag === $route.query.tag ||
              (item.tag === '' && !$route.query.tag),
          }"
          @click="handletags(item.tag)"
        >
          {{ item.name }}
        </span>
      </div>
    </nav>
    <div class="list-wrap">
      <listCard :data="item" v-for="item in list" :key="item.id" @click.native="goDetail(item.id)"/>
    </div>
  </div>
</template>
<script>
import listCard from '@/components/listCard'
export default {
  components:{
    listCard
  },
  data() {
    return {
      tabs: [
        { name: '全部', tag: '' },
        { name: '前端手写合集', tag: 'writeCode' },
        { name: 'vue源码解析', tag: 'vue' },
        { name: '奇妙的css', tag: 'css' },
        { name: 'http基础知识', tag: 'http' },
        { name: 'koa2基础应用', tag: 'koa' },
        { name: '网站部署相关', tag: 'webSet' },
      ],
      list:[],
    }
  },
  created() {
    this.getArticleList(this.$route.query.tag)
  },
  methods: {
    async handletags(tag) {
      tag && this.$router.push(`/blog?tag=${tag}`)
      tag || this.$router.push('/blog')
      this.getArticleList(tag)
    },
    async getArticleList(tag){
      const data = await this.$ajax.post('/getArticleList',{module:tag || ''})    
      if(data.code === 0){
        this.list = data.data
      }
    },
    goDetail(id){
      this.$router.push(`/blog/detail/${id}`)
    }
  },
}
</script>
<style lang="less" scoped>
.main {
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
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .list {
    width: 1200px;
    margin: 0 auto;
    color: #71777c;
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 100%;
    span {
      margin: 0 10px;
      cursor: pointer;
      &:hover {
        color: #3eaf7c;
      }
    }
    .on {
      color: #3eaf7c;
    }
  }
}
.list-wrap {
  width: 1200px;
  margin: 20px auto;
  border-radius: 4px;
  .list-box{
    margin-bottom: 20px;
  }
}
</style>