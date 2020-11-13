<!--
 * @des:编辑器页面 
-->
<template>
  <div>
    <div class="wrap">
      <h2 class="editor-t">发布文章</h2>
      <!-- 文章标题 -->
      <template>
        <div>
          <span class="label"> 文章标题:</span>
          <el-input v-model="title" placeholder="请输入文章标题"></el-input>
        </div>
      </template>
      <!-- 模块 -->
      <template>
        <div>
          <span class="label">选择文章模块:</span>
          <el-select v-model="model" placeholder="请选择文章模块">
            <el-option
              v-for="item in modelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </template>
      <!-- 编辑器 -->
      <mavon-editor v-model="textValue" />
    </div>
    <button class="submit" @click="submit">提交</button>  
  </div>
</template>
<script>
export default {
  data() {
    return {
      textValue: '',
      model: '',
      title: '',
      modelOptions: [
        {
          value: 'blog',
          label: '博文',
        },
        {
          value: 'css',
          label: 'css园地',
        },
        {
          value: 'js',
          label: 'js园地',
        },
        {
          value: 'vue',
          label: 'vue园地',
        },
        {
          value: 'structure',
          label: '数据结构',
        },
        {
          value: 'leetcode',
          label: 'leetcode题解',
        },
      ],
    }
  },
  methods: {
    submit(){
      console.log(this.textValue)
    }
  },
}
</script>
<style lang="less" scoped>
.markdown-body {
  min-height: 800px;
  position: relative;
  z-index: 0;
}
.wrap {
  width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
}
.el-input {
  width: 800px;
  margin-bottom: 30px;
}
.el-select {
  width: 800px;
  margin-bottom: 30px;
}
.label{
  display: inline-block;
  width: 150px;
}
.editor-t{
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
}
.submit{
  width: 200px;
  height: 60px;
  font-size: 24px;
  display: block;
  margin: 50px auto;
}
</style>
