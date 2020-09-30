import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import home from "./modules/home";

export const constantRoutes = [
  {
    path: "/",
    redirect: "/home/index"
  },
  home
];
export const asyncRoutes = [home];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
