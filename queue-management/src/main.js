import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
// import VFC from 'vfc'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'

import './assets/fomantic/dist/semantic.min.css'

import MainComponent from '@/components/MainComponent.vue'
import RegistrationComponent from '@/components/RegistrationComponent.vue'
import AdminUpdateComponent from '@/components/AdminUpdateComponent.vue'
import MiniAdminUpdateComponent from '@/components/MiniAdminUpdateComponent.vue'
import AdminMenuComponent from '@/components/AdminMenuComponent.vue'
import MenuChartComponent from '@/components/MenuChartComponent.vue'
import ConfirmationComponent from '@/components/ConfirmationComponent'


Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(VueAxios, axios)
// Vue.use(VFC)
Vue.component('multiselect', Multiselect)
Vue.config.productionTip = false

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'){
  axios.defaults.baseURL = 'http://localhost:3030/api/post'
}else{
  // check if problem is with this line -- ask Desire to check it out.
  // check what this endpoint is and what it hits, because if it hits and html, then 
  // we'll always return an html
  axios.defaults.baseURL = 'http://report.mmdist.uottawa.ca/lab/api/post'
}

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



// achieve this by changing lang tag in browser
Vue.mixin({
  data(){
    return {language: ''}
  },
  async created(){
    await this.updateLang()
  },
  async updated(){
    await this.updateLang()
  },
  methods: {
    async updateLang(){
      let lang = navigator.language || navigator.userLanguage
      this.language = lang.split("-")[0] === 'fr' ? 'fr' : 'en'
    }
  }
})

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
    },
    {
      path: '/confirmation',
      component: ConfirmationComponent
    }
  ],
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
