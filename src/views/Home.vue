<template>
  <v-container>
    <v-row>
      <v-col
        md="4"
        v-for="todo in getTodos.slice((this.page - 1) * 10, this.page * 10)"
        :key="todo.id"
      >
        <Card :sendTodo="todo"></Card>
      </v-col>
    </v-row>
    <div class="text-center mt-5">
      <v-pagination
        v-model="page"
        :length="getTodos.length / 10"
      ></v-pagination>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import Card from '../components/Card.vue';
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components:{
    Card
  },
  data() {
    return {
      loading: true,
      page: 1,
    };
  },
  computed: {
    ...mapGetters(["getTodos"]),
  },
  methods: {
    Todos() {
      axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos",
      })
        .then((data) => {
          this.loading = false;
          this.$store.dispatch("sendTodos", data.data);
          this.$store.dispatch("sendDataMessage", {
            message: "The bot request was successfully submitted",
            status: data.status,
            settimeout: 3,
          });
        })
        .catch((error) => {
          console.log(error);
          this.$store.dispatch("sendDataMessage", {
            message: error.message,
            status: error.response.status,
            settimeout: 3,
          });
        });
    },
  },
  mounted() {
    this.Todos();
  },
};
</script>
<style lang="scss" scoped>
</style>