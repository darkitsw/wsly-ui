<template>
  <div class="checkbox-view-wrap">
    <h1 class="page-title">Checkbox 多选框</h1>
    <div class="page-container">
      <ws-checkbox class="checkbox" v-model="checkbox1" checkName="隐藏未选中" disabled="disabled">备选项1</ws-checkbox>
      <ws-checkbox class="checkbox" v-model="checkbox2" checkName="选中并隐藏" disabled="disabled">备选项2</ws-checkbox>
      <ws-checkbox class="checkbox" v-model="checkbox3" >备选项3</ws-checkbox>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
  export default {
    data () {
      return {
        checkbox1: false,
        checkbox2: true,
        checkbox3: true
      }
    }
  }
</script>
