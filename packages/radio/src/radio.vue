<template>
  <div class="ws-radio-wrap" :class="[{'ws-radio-wrap-disabled': disabled }]" >
      <span
         :class="[
            {'is-disabled': disabled },
            {'is-checked': radioValue === label},
            {'is-focus': focus }]">
      <span class="ws-radio-inner" :class="checkName === '选中且禁用' ? 'ws-radio-inner-disabled' : 'ws-radio-inner-nodisabled'"></span>
      <input class="ws-input"
          :value="label"
          :disabled="disabled"
          :check-name="checkName"
          v-model="radioValue"
          @blur="focus = false"
          @focus="focus = true"
          type="radio"/>
      </span>
     <span class="ws-radio-label">
        <slot></slot>
      </span>
  </div>
</template>
<style lang="scss">
  .ws-radio-wrap{
    width: 200px;
    float: left;
    &:hover{
      cursor: pointer;
      .ws-radio-inner{
        border:1px solid #1b9de8;
      }
    }

    .is-checked{
      .ws-radio-inner{
        border-color: #1b9de8;
        background: #1b9de8;
        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }

    .is-disabled {
      .ws-radio-inner{
        background-color: #eef1f6 !important;
        border-color: #d1dbe5 !important;
      }
      .ws-radio-inner-disabled:after{
        transform: translate(-50%, -50%) scale(1);
      }
      .ws-input{
        &:hover{
          cursor: not-allowed !important;
        }
      }
    }

    .ws-radio-inner{
      border: 1px solid #bfcbd9;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background-color: #fff;
      position: relative;
      left: 23px;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      vertical-align: middle;
      &:after{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s cubic-bezier(.71,-.46,.88,.6);
      }
    }

    .ws-input{
      opacity: 0;
      position: relative;
      left: 0;
      top: 4px;
      &:hover{
        cursor: pointer;
      }
    }

  }
  .ws-radio-wrap-disabled{
    &:hover{
      cursor: not-allowed !important;
    }
    .ws-radio-label{
      color: #d1dbe5;
    }
  }

</style>
<script>
  export default {
    name: 'ws-radio',
    data () {
      return {
        radioValue: '',
        focus: false
      }
    },
    props: {
      label: [String, Number],
      disabled: [String, Number],
      checkName: [String, Number]
    },
    methods: {
    }
  }
</script>
