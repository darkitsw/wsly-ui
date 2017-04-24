<template>
  <li class="ws-option"
       v-show="visible"
      @click.stop="selectOptionClick"
  >
   <slot>
     <span>{{ currentLabel }}</span>
   </slot>
  </li>
</template>
<style lang="scss">
  .ws-option{
    width:150px;
    line-height: 30px;
    &:hover{
      cursor: pointer;
    }
  }
</style>
<script>
  import Emitter from '../../../src/mixins/emitter';
  export default {
    mixins: [Emitter],
    name: 'ws-option',
    componentName: 'WSOption',
    data () {
      return {
        visible: true
      }
    },
    props: {
      value: {
        type: String
      },
      label: [String, Number]
    },
    computed: {
      currentLabel() {
        return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
      }
    },
    methods: {
      selectOptionClick () {
        this.$emit('input', this.label)
        this.dispatch('WSSelect', 'handleOptionClick', this);
      }
    },
    components: {
      Emitter
    }
  }
</script>
