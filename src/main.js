import Vue from 'vue'
import router from './router'
import store from './store'

import './main.css'
import 'alpinejs'
import VueSimpleAlert from "vue-simple-alert";
import VueTailwind from 'vue-tailwind'



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import {
  TDropdown
} from 'vue-tailwind/dist/components';

const settings = {
  TDropdown
}
Vue.use(VueTailwind, settings)



import VueMoment from 'vue-moment'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueMoment)
Vue.use(VueSimpleAlert)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
