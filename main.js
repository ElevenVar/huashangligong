import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './store/index.js'
import url from './api/api.js'
import http from './http/api.js'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.$store = store
Vue.prototype.$url = url
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
