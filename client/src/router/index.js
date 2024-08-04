import { createRouter, createWebHistory } from "vue-router";

import TheWelcomeView from "@/views/TheWelcomeView.vue";

const routes = [
  { path: "/", component: TheWelcomeView },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
