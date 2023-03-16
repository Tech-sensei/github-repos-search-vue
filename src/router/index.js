import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Repos from "../pages/Repos.vue";
import Repo from "../pages/Repo.vue";
import Error from "../pages/Error.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/repositories",
      name: "Repos",
      component: Repos,
    },
    {
      path: "/repositories/:id",
      name: "Repo",
      component: Repo,
      props: (route) => ({ repoId: Number(route.params.id) }),
    },
    {
      path: "/error",
      name: "Error",
      component: Error,
    },
    // redirect to error page if path not found
    { path: "/:pathMatch(.*)*", redirect: "/error" },
  ],
});

export default router;
