import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
const routerHistory = createWebHistory();
import HomePage from "@/pages/Home";
import AboutPage from "@/pages/About";
import Page404 from "@/pages/404";
import Item from "@/pages/_itemAlias";
const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      // path: "/examples/clash-of-clans",
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      // path: "/examples/clash-of-clans/about",
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      // path: "/examples/clash-of-clans/404",
      path: "/404",
      name: "404",
      component: Page404,
    },
    {
      // path: "/examples/clash-of-clans/:itemAlias",
      path: "/:itemAlias",
      name: "itemAlias",
      component: Item,
    },
  ],
});
export default routers;
