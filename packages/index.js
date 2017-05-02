import { WsSelect, WsOption } from './select/'
import WsButton from './button/'
import WsCheckbox from './checkbox/'
import WsInput from './input/'
import WsRadio from './radio/'
import WsSlider from './slider/'

const components = [
  WsSelect,
  WsOption,
  WsButton,
  WsCheckbox,
  WsInput,
  WsRadio,
  WsSlider
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
