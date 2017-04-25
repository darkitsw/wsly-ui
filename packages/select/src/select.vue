<template>
  <div class="ws-select"
       @click="handleClose"
  >
    <h1 class="page-title">Select选择器</h1>
    <div class="page-container">
      <ws-input
        v-model ="value"
        :placeholder="placeholder"
        :value="currentValue"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
        :readonly="true"
        :disabled="disabled"
      ></ws-input>
      <!-- 单选 -->
      <transition>
        <div v-show="visible !== false">
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<style lang="scss">

  .ws-select-item{
    &:hover{
      cursor: pointer;
    }
  }
</style>
<script>
  import wsInput from '../../input/src/input'
  import wsOption from './option'
  import Emitter from '../../../src/mixins/emitter';
  export default {
    mixins: [Emitter],
    name: 'ws-select',
    componentName: 'WSSelect',
    data () {
      return {
        visible: false,
        currentValue: this.label
      }
    },
    props: {
      value: {},
      placeholder: {
        type: String,
        default: 'default'
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      value: function (v, ov) {
        if (this.currentValue === v) return
        this.currentValue = v;
      }
    },
    mounted () {
      this.create()
    },
    methods: {
      handleClose () {
        this.visible = !this.visible
      },
      handleInput (event) {
        const value = event.target.value
        this.$emit('input', value)
        this.$emit('change', value)
      },
      handleBlur (event) {
        this.$emit('blur', event)
      },
      handleFocus () {
        this.$emit('focus', event)
      },
      handleOptionSelect (option) {
        this.$emit('input', option.value)
        this.visible = false
      },
      create () {
        this.$on('handleOptionClick', this.handleOptionSelect)
      }
    },
    components: {
      wsInput,
      wsOption
    }
  }
</script>
