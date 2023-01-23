<template>
  <v-container>
<!-- <div class="text-center">
    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
    >
      

      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div> -->
  </v-container>
    
 
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name:'Message',
    computed:{
    ...mapGetters([
      'getMessageApi'
    ])}
}
</script>

<style>

</style>