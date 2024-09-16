import Vue from "vue";
import Router from "vue-router";
import HomeView from "../Views/HomeView.vue";
import AppLayout from "../components/ui/layout/AppLayout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "",
          name: "HomeView",
          component: HomeView,
        },
      ],
    },
  ],
});
