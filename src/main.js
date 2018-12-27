import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueTruncateFilter from 'vue-truncate-filter'
import './registerServiceWorker'

// Design and Syte
import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/mediaelementplayer.min.css'
import './assets/css/style.css'

// Vue config and Plugin addition
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueTruncateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
