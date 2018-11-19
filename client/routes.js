import { RouterFactory, nativeScrollBehavior } from "meteor/akryum:vue-router2";
import Home from "./pages/Home.vue";
import NotFound from "./pages/NotFound.vue";
import UsersList from "./pages/UsersList.vue";

const routerFactory = new RouterFactory({
  mode: "history",
  scrollBehavior: nativeScrollBehavior,
});

RouterFactory.configure(factory => {
  factory.addRoutes([
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/users",
      name: "users",
      component: UsersList,
    },
    {
      path: "*",
      component: NotFound,
    },
  ]);
});

export default routerFactory;
