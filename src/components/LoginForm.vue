<template>
  <v-app>
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
          <span class="purple--text font-weight-bold">Register</span>
        </v-col>
      </v-row>
      </v-card-text>
    </v-card>
      </v-col>
    </v-row>
    </v-container>
    
  </v-app>
</template>

<script>
export default {
    name:'LoginForm',
    data(){
      return{
        show1:false
      }
    }
}
</script>

<style lang="scss" scoped>
.login-card{
  background: rgba(#FFFFFF, 0.3);
}
</style>