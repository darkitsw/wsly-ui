<template>
  <div class="ws-warp-button">
    <h1 class="page-title">Button按钮</h1>
    <div class="ws-button-content">
    <h3>通用按钮样式</h3>
    <a>正常情况下，页面按钮采用通用样式，并且根据不同情景采用不用颜色。</a>
    <div class="source">
      <div class="source-warp">
        <span class="source-status">normal</span>:
        <div class="source-block">
          <ws-button type="defaultType" plain="square">按钮</ws-button>
          <ws-button type="primary" plain="square">按钮</ws-button>
          <ws-button type="scuccess" plain="square">按钮</ws-button>
          <ws-button type="error" plain="square">按钮</ws-button>
          <ws-button type="warning" plain="square">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">disable</span>:
        <div class="source-block">
          <ws-button disabled="disabled" type="defaultType" plain="square">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">按钮尺寸</span>:
        <div class="source-block">
          <ws-button size="mini" type="defaultType" plain="square">按钮</ws-button>
          <ws-button size="small" type="defaultType" plain="square">按钮</ws-button>
          <ws-button size="normal" type="defaultType" plain="square">按钮</ws-button>
          <ws-button size="large" type="defaultType" plain="square">按钮</ws-button>
        </div>
      </div>
    </div>

    <h3>圆弧按钮样式</h3>
    <a>正常情况下，页面按钮采用通用样式，并且根据不同情景采用不用颜色。</a>
    <div class="source">
      <div class="source-warp">
        <span class="source-status">normal</span>:
        <div class="source-block">
          <ws-button type="defaultType" plain="circle">按钮</ws-button>
          <ws-button type="primary" plain="circle">按钮</ws-button>
          <ws-button type="scuccess" plain="circle">按钮</ws-button>
          <ws-button type="error" plain="circle">按钮</ws-button>
          <ws-button type="warning" plain="circle">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">disable</span>:
        <div class="source-block">
          <ws-button disabled="disabled" type="defaultType" plain="circle">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">按钮尺寸</span>:
        <div class="source-block">
          <ws-button size="mini" type="defaultType" plain="circle">按钮</ws-button>
          <ws-button size="small" type="defaultType" plain="circle">按钮</ws-button>
          <ws-button size="normal" type="defaultType" plain="circle">按钮</ws-button>
          <ws-button size="large" type="defaultType" plain="circle">按钮</ws-button>
        </div>
      </div>
    </div>

    <h3>幽灵按钮样式</h3>
    <a>正常情况下，页面按钮采用通用样式，并且根据不同情景采用不用颜色。</a>
    <div class="source">
      <div class="source-warp">
        <span class="source-status">normal</span>:
        <div class="source-block">
          <ws-button type="ghost-defaultType" plain="square">按钮</ws-button>
          <ws-button type="ghost-primary" plain="square">按钮</ws-button>
          <ws-button type="ghost-scuccess" plain="square">按钮</ws-button>
          <ws-button type="ghost-error" plain="square">按钮</ws-button>
          <ws-button type="ghost-warning" plain="square">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">disable</span>:
        <div class="source-block">
          <ws-button disabled="disabled" type="defaultType" plain="square">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">按钮尺寸</span>:
        <div class="source-block">
          <ws-button size="mini" type="defaultType" plain="square">按钮</ws-button>
          <ws-button size="small" type="defaultType" plain="square">按钮</ws-button>
          <ws-button size="normal" type="defaultType" plain="square">按钮</ws-button>
          <ws-button size="large" type="defaultType" plain="square">按钮</ws-button>
        </div>
      </div>
    </div>

    <h3>幽灵圆弧按钮样式</h3>
    <a>正常情况下，页面按钮采用通用样式，并且根据不同情景采用不用颜色。</a>
    <div class="source">
      <div class="source-warp">
        <span class="source-status">normal</span>:
        <div class="source-block">
          <ws-button type="ghost-defaultType" plain="circle">按钮</ws-button>
          <ws-button type="ghost-primary" plain="circle">按钮</ws-button>
          <ws-button type="ghost-scuccess" plain="circle">按钮</ws-button>
          <ws-button type="ghost-error" plain="circle">按钮</ws-button>
          <ws-button type="ghost-warning" plain="circle">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">disable</span>:
        <div class="source-block">
          <ws-button disabled="disabled" type="defaultType" plain="circle">按钮</ws-button>
        </div>
      </div>
      <div class="source-warp">
        <span class="source-status">按钮尺寸</span>:
        <div class="source-block">
          <ws-button size="mini" type="defaultType" plain="circle">按钮</ws-button>
          <ws-button size="small" type="defaultType" plain="circle">按钮</ws-button>
          <ws-button size="normal" type="defaultType" plain="circle">按钮</ws-button>
          <ws-button size="large" type="defaultType" plain="circle">按钮</ws-button>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>
<style lang="scss">
  .ws-warp-button {
    height: 100%;
    box-sizing: border-box;
    .ws-button-content{
      padding:0 25px;
    }
    .source {
      padding: 24px;
      border: 1px solid #ddd;
      border-radius: 3px;
      .source-warp {
        line-height: 30px;
        .source-status {
          display: inline-block;
          width: 100px;
        }
        .source-block {
          display: inline-block;
          padding: 0 20px;
        }
      }
    }

  }
</style>
<script>
  import wsButton from '../../../packages/button/src/button'
  export default {
    data () {
      return {
      }
    },
    components: {
      wsButton
    }
  }
</script>
