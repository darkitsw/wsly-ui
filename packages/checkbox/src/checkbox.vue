<template>
  <div class="ws-checkbox-wrap" :class="[{'ws-checkbox-wrap-disabled': disabled }]">
       <span
         :class="[
            {'is-disabled': disabled },
            {'is-checked': checkboxValue === true},
            {'is-focus': focus }]">
      <span class="ws-checkbox-inner" :class="checkName === '选中并隐藏' ? 'ws-checkbox-inner-disabled' : 'ws-checkbox-inner-nodisabled'"></span>
      <input class="ws-input"
             :disabled="disabled"
             v-model="checkboxValue"
             @blur="focus = false"
             @focus="focus = true"
             :check-name="checkName"
             type="checkbox"/>
      </span>
    <span class="ws-checkbox-label">
        <slot></slot>
      </span>
  </div>
</template>
<style lang="scss">
  .ws-checkbox-wrap{
    width: 200px;
    float: left;
    &:hover{
      cursor: pointer;
      .ws-checkbox-inner{
        border:1px solid #1b9de8;
      }
    }

    .ws-checkbox-inner{
      border: 1px solid #bfcbd9;
      width: 18px;
      height: 18px;
      border-radius: 20%;
      background-color: #fff;
      position: relative;
      left: 23px;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      vertical-align: middle;
      &:after{
        box-sizing: content-box;
        content: "";
        border: 2px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 8px;
        left: 5px;
        position: absolute;
        top: 1px;
        width: 4px;
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

    .is-checked {
      .ws-checkbox-inner {
        border-color: #1b9de8;
        background: #1b9de8;
        &:after {
          transform: rotate(45deg) scaleY(1);
        }
      }
    }

    .is-disabled {
      .ws-checkbox-inner{
        background-color: #eef1f6 !important;
        border-color: #d1dbe5 !important;
        &:after{
          transform: rotate(45deg) scaleY(1);
        }
      }
      .ws-checkbox-inner-nodisabled:after{
        border:none;
      }
      .ws-input{
        &:hover{
          cursor: not-allowed !important;
        }
      }
    }

  }

  .ws-checkbox-wrap-disabled{
    &:hover{
      cursor: not-allowed !important;
    }
    .ws-checkbox-label{
      color: #d1dbe5;
    }
  }

</style>
<script>
  export default {
    name: 'ws-checkbox',
    data () {
      return {
        checkboxValue: '',
        focus: false
      }
    },
    mounted () {
    },
    props: {
      disabled: [String, Number],
      checkName: [String, Number]
    },
    methods: {
    }
  }
</script>
