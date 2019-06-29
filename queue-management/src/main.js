import Vue from 'vue'
import SuiVue from 'semantic-ui-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './components/App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'semantic-ui-css/semantic.min.css'
import './assets/style.css'

Vue.config.productionTip = false

Vue.use(SuiVue)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
