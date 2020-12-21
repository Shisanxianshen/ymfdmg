<template>
  <div :class="{ parent: type === 'parent', child: type === 'child' }">
    <div class="head">
      <img :src="data.head || defaultImg" alt />
      <span style="color: #666"
        >{{ data.name
        }}{{
          type === 'child' &&
          data.reviewId !== data.parentId &&
          reviewName(data.reviewId) !== ''
            ? ` @${reviewName(data.reviewId)} `
            : ''
        }}</span
      >
      <span class="time">{{ changeTime(data.date) }}</span>
    </div>
    <div class="contxt">
      <p class="text" style="font-size: 14px" v-html="data.content" v-code></p>
      <div class="con-footer" :class="{ showStatus: inpShow }">
        <i class="el-icon-chat-square"></i>
        <span @click="inpShow = !inpShow">{{
          inpShow ? '取消回复' : '回复'
        }}</span>
        <div class="inp-w" v-if="inpShow" :class="{'show-ani':inpShow}">
          <div
            class="input"
            contenteditable="true"
            @blur="handleText"
            id="inp"
          ></div>
          <button @click="savediscuss(data.commentId)">发布</button>
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
    data: {
      type: Object,
    },
    name: Array,
  },
  inject: ['discussFrom'],
  data() {
    return {
      inpShow: false,
      text: '',
      defaultImg: require('@/static/img/head.jpg')
    }
  },
  methods: {
    handleText(e) {
      this.text = e.target.innerText
    },
    // 回复者名字
    reviewName(id) {
      for (let i of this.name) {
        if (i.commentId === id) {
          return i.name
        }
      }
      return ''
    },
    async savediscuss(id) {
      let params = {
        from: this.discussFrom,
        content: this.text,
        parentId: this.type === 'parent' ? id : this.data.parentId,
        reviewId: id,
      }
      this.$ajax.post('/saveDiscuss', params).then((res) => {
        if (res.code === 0) {
          this.text = ''
          this.inpShow = false
          this.$emit('check')
        }
      })
    },
  },
}
</script>
<style lang="less" scoped>
.head {
  display: flex;
  align-items: center;
  img {
    margin-right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
  }
  .time {
    flex: auto;
    text-align: right;
    color: #666;
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
    .text {
      max-width: 900px;
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
    min-height: 24px;
    font-size: 14px;
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
.show-ani{
  .input{
    animation: inp linear .1s;
  }
  button{
    animation: btn linear .1s;
  }
}
@keyframes inp {
  from{width: 640px;}
  to{width: 600px;}
}
@keyframes btn {
  0%{
    transform: scale(0);
  }
  50%{
    transform: scale(.5);
  }
  100%{
    transform: scale(1);
  }
}
</style>