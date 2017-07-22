// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'

Vue.use(Meta)

Vue.config.productionTip = false

/* eslint-disable no-new */
let app = new Vue({
  router,
  ...App
})

if (process.env.NODE_ENV !== 'production') {
  app.$mount('#app')
}

export {
  app,
  router
}
