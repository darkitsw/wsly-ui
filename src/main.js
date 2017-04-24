// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import wsly from '../packages'

import WSInput from '../packages/input'
import WSButton from '../packages/button'

Vue.component('ws-input', WSInput)
Vue.component('ws-button', WSButton)

Vue.use(wsly)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
