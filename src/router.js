import { createWebHistory, createRouter } from "vue-router";
import Characets from './components/characters.vue'
import Home from "./home.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
      },
  {
    path: "/characters",
    name: "Characets",
    component: Characets,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;