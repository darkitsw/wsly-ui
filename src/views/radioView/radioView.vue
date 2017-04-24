<template>
  <div class="radio-view-wrap">
    <h1 class="page-title">Radio 单选框</h1>
    <div class="page-container">
      <ws-radio class="radio" v-model="radio" label="1" checkName="禁用" disabled="disabled">备选项1</ws-radio>
      <ws-radio class="radio" v-model="radio" label="2" checkName="选中且禁用" disabled="disabled">备选项2</ws-radio>
      <ws-radio class="radio" v-model="radio" label="3">备选项3</ws-radio>
    </div>
  </div>
</template>
<style lang="scss">
 .radio-view-wrap .page-container{
   height:20px;
 }
</style>
<script>
  export default {
    data () {
      return {
        radio: '1'
      }
    }
  }
</script>
