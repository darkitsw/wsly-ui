<template>
  <div class="page-container clearfix">
    <div class="row-left">
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

</style>
<script>
  export default {
    data () {
      return {
        navData: [
          {
            name: '开发指南',
            childNav: [
              {
                name: '安装',
                label: 'installation'
              }
            ]
          }
        ]
      }
    }
  }
</script>
