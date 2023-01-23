<template>
<v-container fluid  class="background">
            <v-row justify="center" class="mt-6">
              <v-col cols="12" sm="4">
                <v-card class="login-card rounded-xl" max-width="500">
                 <v-container>
<v-row justify="center">
                      <v-col cols="6">
                        <v-avatar color="purple lighten-4" size="128">
                          <v-icon size="128"> mdi-account-circle </v-icon>
                        </v-avatar>
                      </v-col>
                    </v-row>
                 
                  <v-card-text>
                    <v-row>
                      <v-form cols="12">
                        <v-container>
                          <v-row>
                          <v-col cols="12">
                        <v-text-field
                          dark
                          outlined
                          dense
                          v-model="name"
                          label="Name"
                          prepend-icon="mdi-pen"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          dark
                          outlined
                          dense
                          v-model="family"
                          label="Familly"
                          prepend-icon="mdi-pen"
                        ></v-text-field>
                      </v-col>
                          <v-col cols="12">
                        <v-text-field
                          dark
                          outlined
                          dense
                          v-model="email"
                          label="Email"
                          prepend-icon="mdi-email"
                        ></v-text-field>
                      </v-col>
                          <v-col cols="12">
                        <v-text-field
                          dark
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
                        <v-btn dark color="purple darken-2" block>
                          Register
                          <v-icon small right> mdi-account-plus </v-icon>
                        </v-btn>
                      </v-col>
                      <v-col cols="12" class="text-center">
                        <span
                          class="purple--text font-weight-bold"
                          v-on:click="goToLogin()"
                          >LOGIN</span
                        >
                      </v-col>
                        </v-row>
                        </v-container>
                      </v-form>
                      
                    </v-row>
                  </v-card-text>
                 </v-container>
                    
                </v-card>
              </v-col>
            </v-row>
          </v-container>

</template>

<script>
export default {
    name:'RegisterForm',
    data(){
      return{
        show2: false,
      email:null,
      name:null,
      family:null,
      }
    },
    methods:{
      registerUser(){
      axios(
        {
          method: "post",
        url: "https://fakestoreapi.com/users",
        }
      )
      .then((data)=>{
        
      })
      .catch((error)=>{

      })
    },
    goToLogin(){
      this.$router.push({name:'Login'})
    }
}
}
</script>

<style lang="scss" scoped>
.background {
  background: linear-gradient(#e66465, #9198e5)!important;
  position: fixed;
  top: 0;
  height: 100vh;
}
.login-card {
  background: rgba(#ffffff, 0.1);
}
</style>