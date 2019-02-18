// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import "../static/css/common.css"
import store from './store'


Vue.use(vueResource)
Vue.config.productionTip = false

// Vue.http.options.emulateHTTP = true;
// Vue.http.options.emulateJSON = true;
var vm=new Vue({
  // el: '#app',
  router,
   store,
  components: { App },
  template: '<App/>'
}).$mount("#app")
