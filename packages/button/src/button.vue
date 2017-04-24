<template>
  <button class="ws-button"
  @click="handleClick"
  :disabled="disabled"
  :type="defaultType"
  :class="[type ? 'ws-button-' + type : '',
           plain ? 'ws-button-status-' + plain : '',
           size ? 'ws-button--' + size : '',
          {'is-disabled': disabled
          }] "
  >
    <span><slot></slot></span>
  </button>
</template>
<style lang="scss">
  @import "../../../src/assets/scss/default-theme.scss";
  .ws-button{
    border:1px solid #d8d5d0;
    background-color: #f5f6f7;
    border-radius: 3px;
    &:hover{
      border:1px solid #d8d5d0;
      background-color: #d8d5d0 ;
      cursor: pointer;
    }
  }
  .ws-button-defaultType {
    border:1px solid #d8d5d0;
    background-color: #f5f6f7;
    &:hover{
      border:1px solid #d8d5d0;
      background-color: #d8d5d0 ;
      cursor: pointer;
    }
  }
  .ws-button-primary {
    border:1px solid #d8d5d0;
    background-color: #00b3ed;
    color: #fff;
    &:hover{
      border: 1px solid #d8d5d0;
      background-color: #009ee8;
      cursor: pointer;
    }
  }
  .ws-button-scuccess {
    border:1px solid  #d8d5d0;
    background-color: #00d787;
    color: #fff;
    &:hover{
      border: 1px solid #d8d5d0;
      background-color: #00b570;
      cursor: pointer;
    }
  }
  .ws-button-error {
    border:1px solid #d8d5d0;
    background-color: #ff504a;
    color: #fff;
    &:hover{
      border:1px solid #d8d5d0;
      background-color: #ec4542;
      cursor: pointer;
    }
  }
  .ws-button-warning {
    border:1px solid #d8d5d0;
    background-color: #ffc63d;
    color: #fff;
    &:hover{
      border:1px solid #d8d5d0;
      background-color: #e7a634;
      cursor: pointer;
    }
  }

  .ws-button-ghost-defaultType{
    border:1px solid #d8d5d0;
    background-color: #fff;
    &:hover{
      border:1px solid #d8d5d0;
      background-color: #d8d5d0 ;
      cursor: pointer;
    }
  }
  .ws-button-ghost-primary{
    border:1px solid #00b3ed;
    background-color: #fff;
    color: #00b3ed;
    &:hover{
      border: 1px solid #00b3ed;
      background-color: #00b3ed;
      color: #fff;
      cursor: pointer;
    }
  }
  .ws-button-ghost-scuccess{
    border:1px solid  #00d787;
    background-color: #fff;
    color: #00d787;
    &:hover{
      border: 1px solid #00b570;
      background-color: #00b570;
      color: #fff;
      cursor: pointer;
    }
  }
  .ws-button-ghost-error{
    border:1px solid #ff504a;
    background-color: #fff;
    color: #ff504a;
    &:hover{
      border:1px solid #ec4542;
      background-color: #ec4542;
      color: #fff;
      cursor: pointer;
    }
  }
  .ws-button-ghost-warning{
    border:1px solid #ffc63d;
    background-color: #fff;
    color: #ffc63d;
    &:hover{
      border:1px solid #e7a634;
      background-color: #e7a634;
      color: #fff;
      cursor: pointer;
    }
  }


  .ws-button-status-square{
    border-radius: 3px;
  }
  .ws-button-status-circle{
    border-radius: 15px;
  }

  .ws-button--mini{
    padding:2px;
  }
  .ws-button--small{
    padding:2px 5px;
  }
  .ws-button--normal{
    padding:2px 10px;
  }
  .ws-button--large{
    padding:5px 15px;
  }

  .ws-warp-button .is-disabled{
    border:1px solid $button_disable_border !important;
    background-color: $button_disable_background_color !important;
    color: $button_disable_color !important;
    &:hover{
      cursor: not-allowed;
    }
  }

</style>
<script>
  export default {
    name: 'ws-button',
    data () {
      return {
        click: ''
      }
    },
    props: {
      defaultType: {
        type: String,
        default: 'button'
      },
      type: {
        type: String,
        default: 'default'
      },
      plain: {
        type: String,
        default: 'square'
      },
      size: {
        type: String,
        default: 'default'
      },
      disabled: Boolean,
    },
    methods: {
      handleClick (evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>
