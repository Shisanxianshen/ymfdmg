<template>
  <div :class="{'parent':type === 'parent','child':type === 'child'}">
    <div class="head">
      <img src="@/static/img/head.jpg" alt />
      捉鱼后摸鱼
    </div>
    <div class="contxt">
      我有一个愿望，让中国所有不遵守劳动法的公司老板全部挂路灯上
      <div class="con-footer" :class="{'showStatus':inpShow}">
        <i class="el-icon-chat-square"></i>
        <span @click="inpShow = !inpShow">{{inpShow ? '取消回复':'回复'}}</span>
        <div class="inp-w" v-if="inpShow">
          <div class="input" contenteditable="true" @blur="handleText" id="inp">
          </div>
          <button>发布</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'parent',
    },
  },
  data() {
    return {
      inpShow: false,
      text: '',
    }
  },
  methods: {
    handleText(e){
      this.text = e.target.innerText
    }
  },
}
</script>
<style lang="less" scoped>
.head {
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
  }
}
.parent,
.child {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f2f7;
  &:hover {
    .contxt {
      .con-footer {
        opacity: 1;
      }
    }
  }
  .showStatus {
    opacity: 1 !important;
  }
  .contxt {
    box-sizing: border-box;
    padding-left: 35px;
    margin-top: 10px;
    .con-footer {
      margin-top: 10px;
      color: #8590a6;
      opacity: 0;
      transition: all 0.3s;
      span {
        cursor: pointer;
        margin-left: 5px;
      }
    }
  }
}
.child {
  margin-left: 35px;
}
.inp-w {
  position: relative;
  margin-top: 10px;
  .input {
    width: 600px;
    border: 1px solid #999;
    border-radius: 5px;
    outline: none;
    padding: 5px;
    color: #333;
  }
  button {
    position: absolute;
    height: 36px;
    width: 60px;
    font-size: 14px;
    bottom: 0;
    left: 620px;
  }
}
</style>