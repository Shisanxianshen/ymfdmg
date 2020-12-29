// 首页
<template>
  <div>
    <div class="banner">
      <p class="txt">{{ title_ani.join('') }}<i></i></p>
    </div>
    <div class="index">
      <div class="about-me">
        <h2>About Me</h2>
        <div class="timeline">
          <el-timeline>
            <el-timeline-item timestamp="2019/06" placement="top">
              毕业于聊城大学，专业是信息与计算科学。本科课程偏向数学，也学习了基础的mysql，数据结构，matlab等课程。
            </el-timeline-item>
            <el-timeline-item timestamp="2019/07" placement="top">
              入职广州的一家创业公司（先行区块链技术有限公司），主要是使用uni-app做区块链app和使用vue全家桶 + element 搭建公司后台管理系统。由于公司只有两三个前端，当时的项目都做得比较随意，eslint与git也没有规范化。。。磕磕绊绊间完成了两三个项目。
            </el-timeline-item>
            <el-timeline-item timestamp="2020/4-至今" placement="top">
              上一家公司在1月份因为疫情原因和其它不为人知的原因解散。所以我在四月份入职了一家教育类的互联网公司（广州科奥信息技术有限公司）入职之后主要负责了ais学术平台（pc与h5），bi后台管理系统功能的更新与维护，学术平台与bi都是基于vue element搭建的，学术平台使用了vue-server-renderer + koa 进行服务端渲染，由于公司经常更新活动页，我基于nuxt的静态打包构建了活动页的公用项目。
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
      <div class="list">
        <h2>推荐内容</h2>
        <ul>
          <li>暂时没啥好推荐的...</li>
          <li>暂时没啥好推荐的:...</li>
          <li>暂时没啥好推荐的:...</li>
          <li>暂时没啥好推荐的...</li>
          <li>暂时没啥好推荐的</li>
        </ul>
      </div>
      <!-- 评论区 -->
      <Discuss />
    </div>
  </div>
</template>
<script>
import Discuss from '@/components/discuss'
export default {
  name: 'index',
  components: {
    Discuss,
  },
  provide: {
    discussFrom: 'index',
  },
  data() {
    return {
      title_txt: `大家好，这里是记录我学习历程，以及日常分享的小站。
      dmg，爱好广泛，职业是一名前端菜鸡。在这里会不定时的记录学习心得，有不对的地方也希望得到指正。`,
      timer: null,
      title_ani: [],
    }
  },
  mounted() {
    let i = 0
    this.timer = setInterval(() => {
      if (i < this.title_txt.length) {
        this.title_ani.push(this.title_txt[i])
        i++
      } else {
        clearInterval(this.timer)
      }
    }, 80)
  },
}
</script>
<style lang="less" scoped>
.banner {
  height: 650px;
  background: url('~@/static/img/banner.jpg') no-repeat center top;
  background-size: cover;
  position: relative;
  .txt {
    position: absolute;
    width: 1200px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 26px;
    color: #cccccc;
    top: 30%;
    text-indent: 2em;
    i {
      display: inline-block;
      width: 3px;
      height: 35px;
      background: #cccccc;
      transform: translateY(8px);
      animation: txtani 1s infinite linear;
    }
    @keyframes txtani {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
.index {
  width: 1200px;
  margin: 0 auto;
  h2 {
    font-size: 35px;
    font-weight: bold;
    color: #3eaf7c;
  }
  .list {
    margin-top: 50px;
    padding-bottom: 50px;
    font-size: 1.5em;
    cursor: pointer;
    li {
      margin: 20px;
      &:hover {
        color: #3eaf7c;
      }
    }
  }
}
.about-me {
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h2 {
    width: 100%;
  }
  /deep/.el-card {
    width: 45%;
    height: 300px;
  }
  .timeline{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .el-timeline{
    width: 50%;
    margin-top: 20px;
  }
  /deep/.el-timeline-item__content{
    color: #666;
    text-indent: 2em;
  }
}
</style>