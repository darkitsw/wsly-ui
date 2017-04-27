<template>
  <div id="app">
    <main-header></main-header>
    <div class="main clearfix">
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import mainHeader from './views/header'
import mainFooter from './views/footer'
export default {
  name: 'app',
  components: {
    mainHeader,
    mainFooter
  }
}
</script>

<style>
  html, body, #app {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 12px;
    width: 100%;
    height: 100%;
    background: #F5F5F5;
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: none;
  }

  img {
    border: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    font-size: 12px;
    list-style: none;
  }

  .clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0;
  }

  .clearfix {
    *zoom: 1;
  }

  .main {
    width: 1140px;
    min-height: 100vh;
    margin: 20px auto;
    background: #fff;
    border: 1px solid #EDEDEE;
    border-radius: 5px;
  }
</style>
