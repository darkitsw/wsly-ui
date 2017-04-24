<template>
  <div class="ws-input-wrap">
    <input class="ws-input"
      :value="currentValue"
      @input="handleInput"
      @blur="handleBlur"
      @focus="handleFocus"
      :placeholder="placeholder"
      :disabled="disabled"
      type="text" />
  </div>
</template>
<style lang="scss">
  .ws-input-wrap {
    font-size: 14px;
    .ws-input {
      padding: 0 5px;
      line-height: 30px;
      height: 30px;
      border: 1px solid #c8c8c8;
      border-radius: 3px;
      transition: .3s;
      &:hover {
        border-color: #546887;
      }
      &:focus {
        border-color: #1b9de8;
      }
      &:disabled {
        cursor: not-allowed;
        background: #eef1f6;
        border-color: #c8c8c8;
      }
    }
  }
</style>
<script>
  export default {
    name: 'ws-input',
    props: {
      value: [String, Number],
      placeholder: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value: function (v, ov) {
        if (this.currentValue === v) return
        this.currentValue = v;
      }
    },
    methods: {
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
      }
    }
  }
</script>
