import Vue from "vue"
import Router from "vue-router"
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import HealthRisk from '../views/HealthRisk.vue'
import Reservation from '../views/Reservation.vue'
import Diet from '../views/Diet.vue'
import Exercise from '../views/Exercise.vue'
import Status from '../views/Status.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/demo', component: Demo },
    { path: '/health-risk', component: HealthRisk },
    { path: '/reservation', component: Reservation },
    { path: '/diet', component: Diet },
    { path: '/exercise', component: Exercise },
    { path: '/status', component: Status }
  ]
});