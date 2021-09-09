import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

VTooltip.options.defaultClass = 'tooltip',
Vue.config.productionTip = false




new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
