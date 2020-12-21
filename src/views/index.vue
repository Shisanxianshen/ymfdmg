// 首页
<template>
  <div class="index">
    <h2>前言</h2>
    <p>
      大家好，这里是记录我学习历程，以及日常分享的小站。
      dmg，爱好广泛，职业是一名前端菜鸡。在这里会不定时的记录学习心得，有不对的地方也希望得到指正。
    </p>
    <div class="list">
      <h2>推荐内容</h2>
      <ul>
        <li>
          暂时没啥好推荐的...
        </li>
        <li>
          暂时没啥好推荐的:...
        </li>
        <li>
          暂时没啥好推荐的:...
        </li>
        <li>
          暂时没啥好推荐的...
        </li>
        <li>
          暂时没啥好推荐的
        </li>
      </ul>
    </div>
    <!-- 评论区 --> 
    <Discuss />
  </div>
</template>
<script>
import Discuss from '@/components/discuss'
export default {
  name:'index',
  components:{
    Discuss,
  },
  provide:{
    'discussFrom':'index',
  },
}
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