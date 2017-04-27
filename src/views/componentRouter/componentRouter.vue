<template>
  <div class="page-container clearfix">
    <div class="row-left">
    <span class="title">组件版本 V0.0.1</span>
      <ul>
        <li v-for="s in navData">
          <span>{{s.name}}</span>
          <ul>
            <li v-for="ss in s.childNav" @click="clickButton(ss)"><router-link :to="{ name: ss.label}" active-class="active">{{ss.name}}</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="row-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss">
  .page-container {
    .row-left {
      width: 298px;
      min-height: 100vh;
      float: left;
      border-right: 2px solid #EDEDEE;
      .title{
        margin: 0 30px;
        height: 60px;
        width: 238px;
        line-height: 60px;
        display: inline-block;
        font-family: "Microsoft YaHei";
        font-size: 14px;
        color: #888888;
        border-bottom: 1px solid #f5f5f5;
      }
      ul {
        padding: 0 30px;
        font-size: 13px;
        .page-version {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #EDEDEE;
        }
        li {
          color: #a8a8a8;
          line-height: 40px;
          span {
            font-size: 14px;
          }
          a {
            display: block;
            transition: .3s;
            text-decoration: none;
            color: #5e6d82;
            position: relative;
            font-family: "Microsoft YaHei";
            font-size: 13px;
            line-height: 30px;
            &:before {
              content: ' ';
              position: absolute;
              right: -62px;
              top: 0;
              height: 100%;
              width: 2px;
              opacity: 0;
              background: #1b9de8;
              transition: .3s;
            }
            &:hover {
              color: #1b9de8;
              cursor: pointer;
            }
            &.active {
              color: #1b9de8;
              &:before {
                opacity: 1;
              }
            }
          }
        }
      }
    }
    .row-right {
      padding: 0 30px;
      width: 780px;
      border-left: 2px solid #EDEDEE;
      margin-left: -2px;
      float: right;
      .page-title {
        color: #5e6d82;
        line-height: 30px;
        padding: 15px 0;
        margin: 0;
        border-bottom: 1px solid #EDEDEE;
        font-size: 20px;

      }
      .page-container {
        padding: 20px 0;
      }
    }
  }
</style>
<script>
  import router from '../../router'
  export default {
    data () {
      return {
        click: '',
        navData: [
          {
            name: 'Basic',
            childNav: [
              {
                name: 'color色彩',
                label: 'color'
              },
              {
                name: 'button按钮',
                label: 'button'
              }
            ]
          },
          {
            name: 'Form',
            childNav: [
              {
                name: 'radio单选框',
                label: 'radio'
              },
              {
                name: 'checkbox多选框',
                label: 'checkbox'
              },
              {
                name: 'input框',
                label: 'input'
              },
              {
                name: 'select选择器',
                label: 'select'
              }
            ]
          }
        ]
      }
    },
    methods: {
      clickButton (s) {
        router.push({name: s.label})
      }
    }
  }
</script>
