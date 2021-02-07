// md语法展示
<template>
  <div class="code-wrap" v-html="html" v-highlight>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      showdown: require('showdown'),
      html: '',
    }
  },
  watch:{
    text(){
      let converter = new this.showdown.Converter()
      this.html = converter.makeHtml(this.text)
    }
  },
}
</script>
<style lang="less" scoped>
  .code-wrap{
    font-size: 16px;
  }
</style>