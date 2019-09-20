import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Exercise from "./views/Exercise.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/exercise",
      name: "exercise",
      component: Exercise
    }
  ]
});
