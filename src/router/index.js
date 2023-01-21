import Vue from "vue";
import VueRouter from "vue-router";
import L_RPage from '../views/L_RPage.vue'; 

Vue.use(VueRouter);

const routes = [
 {
  path:'/L&R',
  component: L_RPage,
  name:'L_RPage'
 }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
