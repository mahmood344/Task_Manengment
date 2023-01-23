import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from '../views/LoginForm.vue';
import RegisterForm from '../views/RegisterForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/login',
    component: LoginForm,
    name:'Login'
  },
  {
    path:'/register',
    component: RegisterForm,
    name:'Register'
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
