<template>
  <div class="ws-select-dropdown"
    :class="[{'is-multiple':$parent.multiple}]"
  >
    <slot></slot>
  </div>
</template>
<style lang="scss">
  .ws-select-dropdown {
  }
</style>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
