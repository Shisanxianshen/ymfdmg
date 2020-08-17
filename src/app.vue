// 个人网站首页
<template>
  <div class="main">
    <naver/>
    <div class="index">
       <h2>前言</h2>
       <p>
         大家好，这里是记录我学习历程，以及日常分享的小站。
         dmg，爱好广泛，职业是一名前端菜鸡。在这里会不定时的记录学习心得，有不对的地方也希望得到指正。
         作为一名程序员，持续的学习与整理自己的知识是必不可少的。这是我接触前端的第二年。时间越久越能发现自己的不足，
         我是非科班出生的程序员，之前也从未写过代码，但在大学中自学前端之后，发现自己还挺热爱编程的。。。最后，愿诸位都能进入大厂！ 
       </p>
    </div>
    <div class="list">
      <h2>热门整理</h2>
      <ul>
        <li>
          {{value}}
          <pre v-highlight>
            <code class="js">{{value}}</code>
          </pre>
        </li>
      </ul>
    </div>
    <div class="footer"><a href="http://beian.miit.gov.cn/" target="_blank">鄂ICP备20014730号</a></div>   
  </div>
</template>
<script>
import naver from '@/components/naver'
export default {
  components:{
    naver,
  },
  data() {
    return {
      value:'let a = 123123',
    }
  },
  mounted() {
    this.value = '123'
  },
  methods: {
    
  },
}
</script>
<style lang="less" scoped>
.main{
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 60px;
}
.index{
  width: 1200px;
  margin: 100px auto;
  h2{
    font-size: 35px;
    font-weight: bold;
    color: #3eaf7c;
  }
  p{
    display: block;
    padding: 15px;
    font-size: 20px;
    border-radius: 8px;
    background: #f9f9f8;
    line-height: 40px;
    margin-top: 60px;
    text-indent: 2em;
    transition: all .3s;
    &:hover{
      background: #e1ecfd;
    }
  }
}
.footer{
  text-align: center;
  width: 100%;
  font-size: 14px;
  height: 60px;
  line-height: 60px;
  border-top: 1px solid #eaecef;
  a{
    color: #999;
  }
}
</style>