<template>
  <div class="code">
    <pre>
        <code>
          <slot></slot>
        </code>
    </pre>
  </div>
</template>
<style lang="less" scoped>
.code {
  pre {
    padding: 15px 12px;
    background: #f8f8f8;
    overflow-x: auto;
    line-height: 1.75;
    width: 600px;
    code {
      white-space: normal;
      word-break: normal;
    }
  }
}
</style>
