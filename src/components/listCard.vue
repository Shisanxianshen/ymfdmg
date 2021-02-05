<template>
  <div class="list-box">
    <p>{{data.author}}</p>
    <h3>{{data.title}}</h3>
    <p>{{data.introduce}}</p>
  </div>
</template>
<script>
export default {
  props:{
    data:{
      type:Object,
      require:true,
    }
  }
}
</script>
<style lang="less" scoped>
  .list-box{
    height: 130px;
    padding: 20px;
    cursor: pointer;
    background: #fff;
    transition: all .3s;
    &:hover{
      background-color: #fafafb;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.08);   
    }
    p{
      color: #999;
      margin-bottom: 10px;
    }
    h3{
      color: #2e3135;
      font-size: 21px;
      font-weight: bold;
    }
  }
</style>