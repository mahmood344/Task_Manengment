<template>
  <v-app>
    <div 
    
    >
        <v-dialog
        v-model="login"
        persistent
        fullscreen
        color="purple"
    >
        <Login
            class="login"
            
        ></Login>
    </v-dialog>
    <v-dialog 
    v-model="register">
        <Register></Register>
    </v-dialog>
    </div>
  </v-app>
</template>

<script>
import Login from '../components/LoginForm.vue';
import Register from '../components/RegisterForm.vue';
export default {
  components: { Login , Register },
    name:'Login&RegisterPage' ,
    component:{
        Login,
        Register
    },
    data(){
        return{
            login:true,
            register:false
        }
    }
}
</script>

<style lang="scss" scoped>
   .login{
    background: linear-gradient(#e66465, #9198e5);
   }
</style>