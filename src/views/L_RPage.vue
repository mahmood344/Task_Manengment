<template>
  <v-app>
    <div>
        <Login class="login">
            <v-dialog v-model="login" persistent fullscreen color="purple" transition="dialog-bottom-transition">
    <v-container>
      <v-row justify="center" class="mt-16" >
      <v-col cols="12" sm="6">
        <v-card 
            class="login-card rounded-xl"
            max-width="500"
    >
      <v-card-title class="text-center">
        <v-row justify="center">
          <v-col cols="6">
            <v-avatar color="purple lighten-4"
              size="128">
           <v-icon size="128">
            mdi-account-circle
            </v-icon>
        </v-avatar>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
        <v-col cols="12">
          <v-text-field
          dark
          :rules="validateLogin"
          outlined
          dense
      v-model="name"
      label="User Name"
      prepend-icon="mdi-account"
    ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            :rules="validatePassword"
            dark
            dense
            outlined
            prepend-icon="mdi-lock"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            label="Password"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn
          dark
          color="purple darken-2"
          block
          >
          LOGIN
            <v-icon small right>
              mdi-send
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="text-center">
          <span class="purple--text font-weight-bold" v-on:click="showRegister()">Register</span>
        </v-col>
      </v-row>
      </v-card-text>
    </v-card>
      </v-col>
    </v-row>
    </v-container>
    </v-dialog>
        </Login>
        <Register>
            <v-dialog v-model="register" fullscreen persistent transition="dialog-top-transition">
    <v-container>
      <v-row justify="center" class="mt-16" >
      <v-col cols="12" sm="6">
        <v-card 
            class="login-card rounded-xl"
            
            max-width="500"
    >
      <v-card-title class="text-center">
        <v-row justify="center">
          <v-col cols="6">
            <v-avatar color="purple lighten-4"
              size="128">
           <v-icon size="128">
            mdi-account-circle
            </v-icon>
        </v-avatar>
          </v-col>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-row>
        <v-col cols="12">
          <v-text-field
          dark
          outlined
          dense
      v-model="name"
      label="User Name"
      prepend-icon="mdi-account"
    ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            dark
            dense
            outlined
            prepend-icon="mdi-lock"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            label="Password"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn
          dark
          color="purple darken-2"
          block
          >
          Register
            <v-icon small right>
              mdi-account-plus
            </v-icon>
          </v-btn>
        </v-col>
        <v-col cols="12" class="text-center">
          <span class="purple--text font-weight-bold" v-on:click="showLogin()">LOGIN</span>
        </v-col>
      </v-row>
      </v-card-text>
    </v-card>
      </v-col>
    </v-row>
    </v-container>
    </v-dialog>
        </Register>
    </div>
  </v-app>
</template>

<script>
import Login from "../components/LoginForm.vue";
import Register from "../components/RegisterForm.vue";
export default {
  components: { Login, Register },
  name: "Login&RegisterPage",
  component: {
    Login,
    Register,
  },
  data() {
    return {
      login: true,
      register: false,
      show1:false,
      show2:false,
      validateLogin:[
        v => !!v || 'Please inter UserName',
        v => !!v && v.length > 5 || 'Your username must be more than 10 characters'
      ] , 
      validatePassword:[
        v => !!v || 'Please inser Password',
        v => !!v && v.length > 10 || 'Your password must be more than 10 characters'
      ]
    };
  },
  methods:{
    showRegister(){
        this.register = true;
        this.login = false;
    },
    showLogin(){
        this.register = false;
        this.login = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  background: linear-gradient(#e66465, #9198e5);
}
.login-card{
  background: rgba(#FFFFFF, 0.1);
}
</style>