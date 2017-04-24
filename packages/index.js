import { WsSelect, WsOption } from './select/index'

const components = [
  WsSelect,
  WsOption
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
