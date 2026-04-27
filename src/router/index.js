import { createRouter, createWebHashHistory } from "vue-router";
import IntroPage from "../views/IntroPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/intro",
  },
  {
    path: "/intro",
    component: IntroPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
