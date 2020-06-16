import Vue from 'nativescript-vue'
import VueDevtools from 'nativescript-vue-devtools'
import App from './components/App'




Vue.use(VueDevtools)
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')
// Prints Colored logs when --env.production is *NOT* set while building
Vue.config.debug = (TNS_ENV !== 'production')


new Vue({
  
  render: h => h('frame', [h(App)])
}).$start()
