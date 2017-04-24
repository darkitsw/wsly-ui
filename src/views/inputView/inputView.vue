<template>
  <div class="input-view-wrap">
    <h1 class="page-title">Input 输入框</h1>
    <div class="page-container">
      <ws-input v-model="input1" placeholder="请输入内容"></ws-input>
      <div>{{input1}}</div>
    </div>

  </div>
</template>
<style lang="scss">
</style>
<script>
  export default {
    data () {
      return {
        input1: ''
      }
    }
  }
</script>
