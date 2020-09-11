// 讨论区组件
<template>
  <div class="discuss">
    评论：
    
    <!-- 发表评论 --> 
    发表评论：
    <quillEditor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @ready="onEditorReady($event)"
    ></quillEditor>
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
export default {
  components: {
    quillEditor,
  },
  data() {
    return {
      //；编辑器配置
      editorOption: {
        placeholder: '请输入内容...',
        readOnly: false,
        theme: 'snow',
      },
      content: ``,
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    },
  },
  mounted() {
    console.log(this.$store.state.info)
  },
  methods: {
    onEditorBlur(quill) {
      console.log(this.content)
    },
    onEditorReady(quill) {
      console.log('editor ready!')
    },
    removeDiscuss(){
      this.content = ''
    },
    sendDiscuss(){
      
    }
  },
}
</script>
<style lang="less" scoped>
// 文本编辑器样式设置
/deep/.ql-toolbar{
  .ql-formats{
    &:nth-child(n+7){
      display: none;
    }
    button{
      margin-top: 0;
    }
  }
}
/deep/.ql-container{
  .ql-editor{
    min-height: 200px;
  }
}
.suport{
  text-align: right;
  button{
    height: 40px;
    padding: 0 20px;
  }
}
</style>