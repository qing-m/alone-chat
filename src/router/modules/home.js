import Layout from "@/layout";

const componentRouter = {
  path: "/home",
  component: Layout,
  children: [
    {
      path: "index",
      name: "Home",
      component: () => import("@/views/Home/index"),
      meth: { title: "首页", icon: "home", permission: [0, 1, 2] }
    }
  ]
};

export default componentRouter;
