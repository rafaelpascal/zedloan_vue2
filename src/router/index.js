import Vue from "vue";
import Router from "vue-router";
import HomeView from "../Views/HomeView.vue";
import Accounts from "../Views/AccountView.vue";
import Loan from "../Views/LoanView.vue";
import Profile from "../Views/ProfileView.vue";
import AppLayout from "../components/ui/layout/AppLayout.vue";
import AdminHome from "@/Views/AdminHome.vue";
import LoginView from "@/Views/LoginView.vue";

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
        {
          path: "accounts",
          name: "Accounts",
          component: Accounts,
        },
        {
          path: "offers",
          name: "Loan",
          component: Loan,
        },
        {
          path: "profile",
          name: "Profile",
          component: Profile,
        },
        {
          path: "admin",
          name: "AdminHome",
          component: AdminHome,
        },
        {
          path: "admin/login",
          name: "Login",
          component: LoginView,
        },
      ],
    },
  ],
});
