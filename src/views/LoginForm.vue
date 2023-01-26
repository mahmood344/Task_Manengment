<template>
  <v-container fluid class="background">
    <v-row justify="center" class="mt-16">
      <v-col cols="12" sm="4">
        <v-card class="login-card rounded-xl" max-width="500">
          <v-card-title class="text-center">
            <v-row justify="center">
              <v-col cols="6">
                <v-avatar color="purple lighten-4" size="128">
                  <v-icon size="128"> mdi-account-circle </v-icon>
                </v-avatar>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-form cols="12" ref="login">
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        dark
                        :rules="validateLogin"
                        outlined
                        dense
                        v-model="userName"
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
                        v-on:click="loginUser()"
                        block
                      >
                        LOGIN
                        <v-icon small right> mdi-send </v-icon>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" class="text-center">
                      <v-hover v-slot="{ hover }" open-delay="200">
                      <span
                        class="purple--text font-weight-bold"
                        :class="{hovertext:hover}"
                        v-on:click="goToRegister()"
                        >Register</span
                      ></v-hover>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      login: true,
      register: false,
      show1: false,
      userName: 'mor_2314',
      password: '83r5^_',
      validateLogin: [
        (v) => !!v || "Please inter UserName",
        (v) =>
          (!!v && v.length > 5) ||
          "Your username must be more than 10 characters",
      ],
      validatePassword: [
        (v) => !!v || "Please inser Password",
        (v) =>
          (!!v && v.length > 5) ||
          "Your password must be more than 10 characters",
      ],
    };
  },
  computed: {
    ...mapGetters(["getMessageApi" , "getToken"]),
  },
  methods: {
    loginUser() {
      if (this.$refs.login.validate()) {
        axios({
          method: "post",
          url: "https://fakestoreapi.com/auth/login",
          data: {
            username: this.userName,
            password: this.password,
          },
        })
          .then((data) => {
            console.log(data.data);
            this.$store.dispatch("sendDataMessage", {
              message: "you are successfully login",
              status: data.status,
              settimeout: 3,
            });
            this.$store.dispatch("sendToken", data.data.token);
            this.$refs.login.reset()
          })
          .catch((error) => {
            this.$store.dispatch("sendDataMessage", {
              message: error.response.data,
              status: error.response.status,
              settimeout: 3,
            });
            this.$refs.login.reset()
          });
      }
    },
    goToRegister() {
      this.$router.push({ name: "Register" });
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  background: linear-gradient(#e66465, #9198e5) !important;
  position: fixed;
  top: 0;
  height: 100vh;
}
.login-card {
  background: rgba(#ffffff, 0.1);
}
.hovertext{
  cursor:pointer;
  transition: 1s;
  color: white !important;
}
</style>