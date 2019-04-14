// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBrain, faArrowLeft, faCheckCircle, faEllipsisV, faShareAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { VueHammer } from 'vue2-hammer'
import Moment from 'vue-moment'
library.add(faBrain)
library.add(faArrowLeft)
library.add(faCheckCircle)
library.add(faEllipsisV)
library.add(faShareAlt);
library.add(faEdit);
library.add(faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueResource)
Vue.use(VueHammer)
Vue.use(Moment)

Vue.config.productionTip = false

store.subscribe((mutation, state) => {
  localStorage.setItem('thinking-store', JSON.stringify(state))
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  beforeCreate () {
    this.$store.commit('initialiseStore')
  },
  template: '<App/>',
  components: { App }
})
