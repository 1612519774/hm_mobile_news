import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.min.js'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vuex)
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
