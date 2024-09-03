
import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../view/main/MainView.vue";
import TatyView from "@/view/taty/TatyView.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainView,
  },
    {
      path: '/Taty',
      name: 'Taty',
      component: TatyView
    }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
