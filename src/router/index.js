import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import Demo from "../views/Demo.vue";
import HealthRisk from "../views/HealthRisk.vue";
import Reservation from "../views/Reservation.vue";
import Diet from "../views/Diet.vue";
import Exercise from "../views/Exercise.vue";
import Status from "../views/Status.vue";
import Analysis from "../views/Analysis.vue";
import BloodPressure from "../views/BloodPressure.vue";
import HeartRate from "../views/HeartRate.vue";
import Temperature from "../views/Temperature.vue";
import SleepCycle from "../views/SleepCycle.vue";
import Risks from "../views/Risks.vue";
import exercisein from "../views/exercisein.vue";
import exerciseout from "../views/exerciseout.vue";
import ReservationSuccess from "../views/ReservationSuccess.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", component: Home },
    { path: "/demo", component: Demo },
    { path: "/health-risk", component: HealthRisk },
    { path: "/reservation", component: Reservation },
    { path: "/diet", component: Diet },
    { path: "/exercise", component: Exercise },
    { path: "/status", component: Status },
    { path: "/analysis", component: Analysis },
    { path: "/bloodpressure", component: BloodPressure },
    { path: "/heartrate", component: HeartRate },
    { path: "/temperature", component: Temperature },
    { path: "/sleepcycle", component: SleepCycle },
    { path: "/risks", component: Risks },
    { path: "/exercisein", component: exercisein },
    { path: "/exerciseout", component: exerciseout },
    { path: "/ReservationSuccess", component: ReservationSuccess },
  ],
});
