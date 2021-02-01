// md语法展示
<template>
  <div v-html="html"></div>
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
  created() {
    let converter = new this.showdown.Converter()
    this.html = converter.makeHtml(this.text)
  },
}
</script>
<style lang="less" scoped>
</style>