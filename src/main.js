import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWolfPackBattalion } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vuetify from './plugins/vuetify'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)

library.add(faWolfPackBattalion)
library.add(faUser)

Vue.component('font-awesome-icon', FontAwesomeIcon)

VTooltip.options.defaultClass = 'tooltip',
Vue.config.productionTip = false




new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
