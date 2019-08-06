import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

import './assets/fomantic/dist/semantic.min.css'

import MainComponent from '@/components/MainComponent.vue'
import RegistrationComponent from '@/components/RegistrationComponent.vue'
import AdminUpdateComponent from '@/components/AdminUpdateComponent.vue'
import MiniAdminUpdateComponent from '@/components/MiniAdminUpdateComponent.vue'
import AdminMenuComponent from '@/components/AdminMenuComponent.vue'
import MenuChartComponent from '@/components/MenuChartComponent.vue'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030/api/post'

Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.component('multiselect', Multiselect)
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
    },
    {
      path: '/update',
      component: AdminUpdateComponent
    },
    {
      path: '/miniupdates',
      component: MiniAdminUpdateComponent
    },
    {
      path: '/admin',
      component: AdminMenuComponent
    },
    {
      path: '/menu',
      component: MenuChartComponent
    }
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
