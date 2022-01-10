import Home from "./containers/Home";
import Login from "./containers/Login";

export default [
  {
    path: "/",
    component: Home,
    key: "home",
    loadData: Home.loadData,
    // routes: [
    //   {
    //     path: "/ttt",
    //     component: Login,
    //     key: "ttt",
    //   },
    // ],
  },
  {
    path: "/login",
    component: Login,
    key: "login",
  },
];
