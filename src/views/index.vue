// 首页
<template>
  <div class="index">
    <h2>前言</h2>
    <p>
      大家好，这里是记录我学习历程，以及日常分享的小站。
      dmg，爱好广泛，职业是一名前端菜鸡。在这里会不定时的记录学习心得，有不对的地方也希望得到指正。
      作为一名程序员，持续的学习与整理自己的知识是必不可少的。这是我接触前端的第二年。时间越久越能发现自己的不足，
      我是非科班出生的程序员，之前也从未写过代码，但在大学中自学前端之后，发现自己还挺热爱编程的。。。最后，愿诸位都能进入大厂！
    </p>
    <div class="list">
      <h2>推荐内容</h2>
      <ul v-highlight>
        <li>
          css妙用:这里是整理收集的好用的css妙招...
        </li>
        <li>
          常用的es6:...
        </li>
        <li>
          vue部分源码解析:...
        </li>
        <li>
          leetcode前端高频题更新中...
        </li>
        <li>
          前端性能优化
        </li>
        <li>
          商业化解决方案实践（无服务架构与微前端）
        </li>
        <li>
          Three.js好像挺有意思...
        </li>
        <li>
          分享一下最近关于我的故事...
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.index {
  width: 1200px;
  margin: 100px auto;
  h2 {
    font-size: 35px;
    font-weight: bold;
    color: #3eaf7c;
  }
  p {
    display: block;
    padding: 15px;
    font-size: 20px;
    border-radius: 8px;
    background: #f9f9f8;
    line-height: 40px;
    margin-top: 60px;
    text-indent: 2em;
    transition: all 0.3s;
    &:hover {
      background: #e1ecfd;
    }
  }
  .list{
    margin-top: 50px;
    padding-bottom: 50px;
    font-size: 1.5em;
    cursor: pointer;
    li{
      margin: 20px;
      &:hover{
        color: #3eaf7c;
      }
    }
  }
}
</style>