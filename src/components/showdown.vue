// md语法展示
<template>
  <div class="code-wrap" v-html="html" v-highlight></div>
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
  watch: {
    text() {
      let converter = new this.showdown.Converter({ tables: true })
      this.html = converter.makeHtml(this.text)
    },
  },
}
</script>
<style lang="less" scoped>
.code-wrap {
  font-size: 16px;
  /deep/table {
    border-collapse: collapse;
    margin-bottom: 10px;
    margin-top: 10px;
      text-align: center;
    tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
    }
    th {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
      font-weight: 600;
    }
    td {
      padding: 6px 13px;
      border: 1px solid #dfe2e5;
    }
  }
}
</style>