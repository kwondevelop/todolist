import { createRouter, createWebHashHistory } from "vue-router";
import IntroPage from "../views/IntroPage.vue";
import SignupPage from "../views/SignupPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/intro",
  },
  {
    path: "/intro",
    component: IntroPage,
  },
  {
    path: "/signup",
    component: SignupPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
