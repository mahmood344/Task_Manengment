import Vue from "vue";
import VueRouter from "vue-router";
import LoginForm from '../views/LoginForm.vue';
import RegisterForm from '../views/RegisterForm.vue';
import Home from '../views/Home.vue';
import DoneTodos from '../views/DoneTodos.vue';
import Incomplete from '../views/Incomplete.vue';
import store from '../store/index.js';
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'Home',
    component: Home,
  },
  {
    path:'/login',
    component: LoginForm,
    name:'Login',
    beforeInter:function(next){
      if(localStorage.getItem('token')){
        next({name:'Home'})
      }
      else{
        next(false);
      }
    }
  },
  {
    path:'/register',
    component: RegisterForm,
    name:'Register'
  },
  {
    path:'/tododone',
    name:'TodoDone',
    component: DoneTodos
  },
  {
    path:'/incompletetodo' ,
    name:'Incomplete',
    component: Incomplete
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
