<template>
  <div class="detail">
    <showdown :text="content"/>
  </div>
</template>
<script>
import showdown from '@/components/showdown'
export default {
  components:{
    showdown
  },
  data() {
    return {
      content:'### 123123',
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    async getDetail () {
      const data = await this.$ajax.post(`/getArticleDetail/${this.$route.params.id}`)
      if(data.code === 0){
        this.content = data.data.content
      }
    }
  },
}
</script>
<style lang="less" scoped>
  .detail{
    width: 800px;
    margin: 0 auto;
    padding-top: 100px;
    padding-bottom: 50px;
    /deep/h1{
      font-size: 24px;
      font-weight: bold;
      color: #333;
      margin: 20px 0;
    }
    /deep/h2{
      font-size: 22px;
      font-weight: bold;
      color: #333;
      margin: 20px 0;
    }
    /deep/h3{
      font-size: 20px;
      font-weight: bold;
      color: #333;
      margin: 20px 0;
    }
    /deep/p{
      line-height: 2;
      font-size: 14px;
      color: #666;
    }
    /deep/a{
      text-decoration: underline;
      color: skyblue;
    }
    /deep/img{
      max-width: 100%;
      margin: 20px 0;
    }
  }
</style>