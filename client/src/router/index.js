import { createRouter, createWebHistory } from "vue-router";

import TheWelcomeView from "@/views/TheWelcomeView.vue";
import SignUpView from "@/views/SignUpView.vue";

const routes = [
  { path: "/", component: TheWelcomeView },
  { path: "/sign-up", component: SignUpView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
