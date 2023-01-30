<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="todoIncomplete in getTodoIncomplete.slice((this.page - 1) * 10, this.page * 10)" :key="todoIncomplete.id">
        <Card :sendTodo="todoIncomplete"></Card>
      </v-col>
    </v-row>
    <div class="text-center mt-5">
    <v-pagination
      v-model="page"
      :length="getTodoIncomplete.length / 10"
    ></v-pagination>
  </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Card from '../components/Card.vue'; 
export default {
    name:'TodoDone',
    components:{
        Card
    },
    data(){
        return{
            page: 1
        }
    },
    computed: {
    ...mapGetters(["getTodoIncomplete"]),
  },
}
</script>

<style>

</style>