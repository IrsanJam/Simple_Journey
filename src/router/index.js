import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Homepage.vue";
import Service from "../views/Servicepage.vue";
import About from "../views/Aboutpage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
  },
});

export default router;
