<template>
  <div class="ws-warp-color">
    <h1 class="page-title">Color色彩</h1>
    <div class="ws-clo" v-for="col in colorData">
      <div class="ws-name">
        <span>{{col.name}}</span>
        <div class="ws-des">{{col.des}}</div>
      </div>

      <div class="ws-block">
        <ul v-for="co in col.color">
          <li :style="{color:co.color,background:co.br,border:co.border}">{{co.br}}</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<style lang="scss">
  .ws-clo{
    padding: 12px 25px;
    .ws-name{
      span{
        font-size: 16px;
        font-family: "Microsoft YaHei";
        color: #3d3d3d;
        display: inline-block;
        height: 20px;
        width: 100%;
      }
      .ws-des{
        line-height:30px;
        color: #737373;
      }
    }
  }
  .ws-block{
    height:70px;
    ul{
      li{
        width: 158px;
        float: left;
        text-align: center;
        height: 68px;
        line-height: 68px;
        border-radius: 4px;
        margin-right: 10px;
        margin-bottom: 20px;
      }
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        colorData: [
          {
            name: '主色',
            des: '系统主色调为蓝色',
            color: [
              {
                br: '#2e7ecf',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#1b9de8',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#49b1ed',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#d1ebfa',
                color: '#1b9de8',
                border: '1px solid #fff'
              }
            ]
          },
          {
            name: '辅助色',
            des: '除了主色外的场景，需要在不同的场景中使用，突出、警示、操作提示等',
            color: [
              {
                br: '#49b1ed',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#1dd388',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#fa5e5b',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#ffc83f',
                color: '#fff',
                border: '1px solid #fff'
              }
            ]
          },
          {
            name: '文字色',
            des: '用于系统文字颜色',
            color: [
              {
                br: '#2a2a2a',
                color: '#fff',
                border: '1px solid #fff'

              },
              {
                br: '#555555',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#888888',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#d4d4d4',
                color: '#000',
                border: '1px solid #fff'
              }
            ]
          },
          {
            name: '中性色',
            des: '用于系统背景、边框、分割线颜色，用不同的颜色区分主次，表现层次结构',
            color: [
              {
                br: '#2a3342',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#354052',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#546887',
                color: '#fff',
                border: '1px solid #fff'
              },
              {
                br: '#dde9fb',
                color: '#000',
                border: '1px solid #fff'
              },
              {
                br: '#dee0e3',
                color: '#000',
                border: '1px solid #a0a0a0'
              },
              {
                br: '#f5f6f8',
                color: '#000',
                border: '1px solid #a0a0a0'
              },
              {
                br: '#fbfbfc',
                color: '#000',
                border: '1px solid #a0a0a0'
              },
              {
                br: '#ffffff',
                color: '#000',
                border: '1px solid #a0a0a0'
              }
            ]
          }
        ]
      }
    }
  }
</script>
