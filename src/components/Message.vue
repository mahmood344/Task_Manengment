<template>
  <v-container>
<div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :color="setColor()"
      outlined
      rounded
      absolute
      top
      right
    >
      {{ getMessageApi.message}}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  </v-container>
    
 
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'Message',
    data(){
      return{
        snackbar: false,
      }
    },
    computed:{
    ...mapGetters([
      'getMessageApi'
    ])},
    methods:{
      setColor(){
      if(this.getMessageApi.status == 200){
        return 'success'
      }
      else{
        return 'red accent-2'
      }
    } , 
    },
    mounted(){
    },
    watch:{
      getMessageApi(){
        this.snackbar = true;
        setTimeout(() => {
          this.snackbar = false;
        }, this.getMessageApi.settimeout*1000);
    },
   
}
}
</script>

<style>

</style>