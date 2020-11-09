// 讨论区组件
<template>
  <div class="discuss">
    <div class="tips">评论区<i class="el-icon-chat-dot-square"></i>：</div>
    <div class="nodiscuss" v-if="!list.length">&nbsp;&nbsp;暂未有人评论...</div>
    <div class="discuss-box" v-else>
      <div class="list" v-for="item in list" :key="item.commentId">
        <listItem :data="item" @check="getDiscuss" />
        <!-- child -->
        <listItem
          type="child"
          v-for="childItem in item.childList"
          :key="childItem.commentId"
          :data="childItem"
          :name="discussList"
          @check="getDiscuss"
        />
      </div>
    </div>
    <!-- 发表评论 -->
    <div class="tips" id="abc">发表评论：</div>
    <quillEditor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @ready="onEditorReady($event)"
    ></quillEditor>
    <el-input v-model="input" placeholder="请输入内容">
      <i slot="suffix" class="el-input__icon el-icon-date"></i>
    </el-input>
    <div class="suport">
      <button class="btn-hover" @click="removeDiscuss">撤销</button>
      <button class="btn-hover" @click="sendDiscuss">发表评论</button>
    </div>
  </div>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import listItem from './talkList/listItem'
export default {
  components: {
    quillEditor,
    listItem,
  },
  inject: ['discussFrom'],
  data() {
    return {
      //；编辑器配置
      editorOption: {
        placeholder: '请输入内容...',
        readOnly: false,
        theme: 'snow',
      },
      content: '',
      discussList: [],
      input:'',
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
    // 处理消息子数组
    list() {
      let newList = []
      let child = []
      this.discussList.forEach((item) => {
        if (!item.parentId && !item.reviewId) {
          item.childList = []
          newList.push(item)
        } else {
          child.push(item)
        }
      })
      newList.forEach((item) => {
        child.forEach((childItem) => {
          if (childItem.parentId === item.commentId) {
            item.childList.push(childItem)
          }
        })
      })
      return newList
    },
  },
  mounted() {
    this.getDiscuss()
    document.getElementById('abc').onclick = function(){
      console.log(this)
    }
  },
  methods: {
    onEditorReady(quill) {
      console.log('editor ready!')
    },
    onEditorBlur(){
      //...
    },
    removeDiscuss() {
      this.content = ''
    },
    // 提交评论
    sendDiscuss() {
      if (this.content === '') {
        this.$message.error('评论不能为空')
        return
      }
      let params = {
        from: this.discussFrom,
        content: this.content,
        parentId: 0,
        reviewId: 0,
      }
      this.$ajax.post('/saveDiscuss', params).then((res) => {
        if (res.code === 0) {
          this.content = ''
          this.getDiscuss()
        }
      })
    },
    // 查询评论数据(无需登录)
    async getDiscuss() {
      const data = await this.$ajax.post('/user/discussList', {
        discussFrom: this.discussFrom,
      })
      this.discussList = data.data
    },
  },
}
</script>
<style lang="less" scoped>
// 文本编辑器样式设置
/deep/.ql-toolbar {
  .ql-formats {
    &:nth-child(n + 7) {
      display: none;
    }
    button {
      margin-top: 0;
    }
  }
}
/deep/.ql-container {
  .ql-editor {
    min-height: 200px;
  }
}
.suport {
  text-align: right;
  button {
    height: 40px;
    padding: 0 20px;
  }
}
.discuss-box {
  box-sizing: border-box;
  padding: 10px 20px;
  border: 1px solid #f0f2f7;
  border-radius: 3px;
  font-size: 16px;
  background: #fefefe;
}
.tips {
  margin: 20px 0;
}
.nodiscuss {
  border-radius: 3px;
  padding: 20px;
  background: #fefefe;
  border: 1px solid #ccc;
  color: #666;
}
</style>