import { createRouter, createWebHashHistory } from "vue-router";
import IntroPage from "../views/IntroPage.vue";
import SignupPage from "../views/SignupPage.vue";
import TodoPage from "../views/TodoPage.vue";

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
  {
    path: "/todo",
    component: TodoPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
