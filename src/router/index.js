import Vue from "vue"
import Router from "vue-router"
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/demo', component: Demo }
  ]
});