<template>
  <div class="main">

  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() {
    this.$ajax.get('http://localhost:3000/',{a:'123'}).then(res =>{
      console.log(res)
    })
  },
}
</script>
<style lang="less" scoped>
.main {
  width: 1200px;
  margin: 0 auto;
}
</style>