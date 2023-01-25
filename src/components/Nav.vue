<template>
  <nav class="Zindex">
          <v-toolbar >
    <v-row>
      <v-col md="2">
    <v-toolbar-title class="mt-6">
        <span class="font-weight-bold">Task</span>
        <span class="subtitle-1 gray--text"> Manengment</span>
    </v-toolbar-title>
    </v-col>
    <v-col md="4" class="mt-6">
      <span v-if="getToken">
      menu
      </span>
    </v-col>
    <v-col  md="5">
      <v-text-field
            v-if="getToken"
            dense
            prepend-inner-icon="mdi-magnify"
            filled
            rounded
            class="mt-5"
          ></v-text-field>
    </v-col>
    <v-col  md="1">
<v-btn icon class="mt-4 ml-12" v-if="getToken">
            <v-icon>
              mdi-exit-to-app
            </v-icon>
          </v-btn>
    </v-col>
    </v-row>
        </v-toolbar>

    
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'Nav',
    data(){
      return{
        
      }
    },
    computed:{
    ...mapGetters([
      'getToken'
    ])},
}
</script>

<style lang="scss" scoped>
  .Zindex{
    z-index: 1;
  }
</style>