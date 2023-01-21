<template>
  <v-app>
    <v-dialog
        v-model="login"
        persistent
        fullscreen
        
    >
        <Login></Login>
    </v-dialog>
    <v-dialog 
    v-model="register">
        <Register></Register>
    </v-dialog>
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
   
</style>