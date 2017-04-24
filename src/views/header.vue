<template>
  <div class="main-header">
    <header>
      <h1 class="logo">
       <a class="clearfix"><img src="../../static/image/wsly_logo_top_1.png" /></a>
      </h1>

      <ul class="nav">
        <li v-for="n in navData"><router-link :to="{ name: n.name}" active-class="active">{{n.title}}</router-link></li>
      </ul>
    </header>
  </div>
</template>
<style lang="scss">
  .main-header {
    height: 60px;
    line-height: 60px;
    width: 100%;
    background: #2e7ecf;
    color: #fff;
    header {
      width: 1140px;
      height: 100%;
      margin: auto;
      .logo {
        margin: 0;
        float: left;
        position: relative;
        top:10px;
        a {
          display: block;
          &:hover {
            cursor: pointer;
          }
        }
        img {
          float: left;
        }
      }
      .nav {
        float: right;
        li {
          float: left;
          padding: 0 10px;
          a {
            display: inline-block;
            transition: .3s;
            padding: 0 10px;
            height: 20px;
            line-height: 20px;
            text-decoration: none;
            font-size: 14px;
            font-family: "Microsoft YaHei";
            color: #fff;
            border-radius: 20px;
            border: 1px solid rgba(0, 0, 0, 0);
            &.active{
              border: 1px solid rgba(255, 255, 255, 1);
            }
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        navData: [
          {
            title: '概要',
            name: 'guide'
          },
          {
            title: '组件',
            name: 'component'
          },
          {
            title: '文档',
            name: 'resource'
          }
        ]
      }
    }
  }
</script>
