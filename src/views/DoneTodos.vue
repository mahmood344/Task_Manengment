<template>
  <v-container>
    <v-row>
      <v-col md="4" v-for="todoDone in getTodosDone.slice((this.page - 1) * 10, this.page * 10)" :key="todoDone.id">
        <Card :sendTodo="todoDone"></Card>
      </v-col>
    </v-row>
    <div class="text-center mt-5">
    <v-pagination
      v-model="page"
      :length="getTodosDone.length / 10"
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
    ...mapGetters(["getTodosDone" , 'getToken']),
  },
}
</script>

<style>

</style>