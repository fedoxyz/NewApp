import { createRouter, createWebHistory } from "vue-router";

import MainView from "@/views/MainView.vue";
import SignUpView from "@/views/SignUpView.vue";

const routes = [
  { path: "/", component: MainView },
  { path: "/sign-up", component: SignUpView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
