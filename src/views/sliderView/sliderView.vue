<template>
  <div class="ws-slider">
    <h1 class="page-title">Slider滑块</h1>
    <section data-title="普通滑块" id="demo">
      <ws-slider ref="slider" v-bind="demo.default" v-model="demo.default.value"></ws-slider>
    </section>
  </div>
</template>
<style lang="scss">
  section {
    padding: 70px 20px 20px 20px;
    margin: 50px auto;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, .36);
    max-width: 800px;
    background-color: #fff;
    position: relative;
  }

  section::after {
    content: attr(data-title);
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 18px;
    font-weight: bold;
    color: #f05b72;
  }
</style>
<script>
  export default {
    data () {
      return {
        demo: {
          default: {
            value: 0,                // 值
            width: 'auto',           // 组件宽度
            height: 6,               // 组件高度
            direction: 'horizontal', // 组件方向 horizontal 横向  vertical 竖向
            dotSize: 16,             // 滑块大小
            eventType: 'auto',       // 事件类型
            min: 0,                  // 最小值
            max: 100,                // 最大值
            interval: 1,             // 分段间隔
            disabled: false,         // 是否不可用
            show: true,              // 是否显示组件
            realTime: false,         // 是否实时计算组件布局
            tooltip: 'always',       // 是否显示提示工具
            clickable: true,         // 是否可点击
            tooltipDir: 'top',       // 工具提示方向
            piecewise: false,        // 是否显示分段样式
            lazy: false,             // 是否在拖拽结束后同步值
            reverse: false,          // 是否反向组件
            speed: 0.5,              // 动画速度
            formatter: null,         // 格式化tooltip值
            bgStyle: null,           // 组件背景样式
            sliderStyle: null,       // 滑块样式
            tooltipStyle: null,      // 工具提示样式
            processStyle: null,      // 进度条样式
            piecewiseStyle: null     // 分割点样式
          }
        }
      }
    },
    methods: {
    }
  }
</script>
