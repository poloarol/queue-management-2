import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/fomantic/dist/semantic.min.css'
import './assets/fomantic/dist/semantic.min.js'

import MainComponent from '@/components/MainComponent.vue'
import RegistrationComponent from '@/components/RegistrationComponent.vue'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030/api/post'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: MainComponent
    },
    {
      path: '/register',
      component: RegistrationComponent
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
