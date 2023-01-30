<template>
  <v-container>
    <v-row>
      <v-col cols="4">
       <Card :sendTodo="Task"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import Card from '../components/Card.vue'
export default {
  name: "Task",
  components:{
    Card
  },
  data(){
    return{
        Task: null,
    }
  },
  methods: {
    getTask() {
      axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/todos/${this.$route.params.id}`
      })
        .then((data) => {
          this.Task = data.data;
          this.Loading = false;
          this.$store.dispatch("sendDataMessage", {
              message: "The task was successfully restored",
              status: 200,
              settimeout: 3,
            });
        })
        .catch(() => {
          this.$store.dispatch("sendDataMessage", {
              message: "The task was not successfully retrieved",
              status: 400,
              settimeout: 3,
            });
        });
    },
  },
  mounted(){
    this.getTask();
  }
};
</script>

<style>
</style>