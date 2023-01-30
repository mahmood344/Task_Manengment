<template>
  <v-card
          :loading="loading"
          :style="{
            border: sendTodo.completed ? '1px solid green' : '1px solid red',
          }"
          outlined
        >
          <v-card-title>
            {{ sendTodo.title }}
          </v-card-title>
          <v-card-action>
            <v-container>
              <v-row>
                <v-col md="8">
                  <v-btn color="primary"> viwe Task </v-btn>
                </v-col>
                <v-col md="2">
                  <v-btn icon v-if="!sendTodo.completed" v-on:click="donTask(sendTodo)">
                    <v-icon color="success"> mdi-check </v-icon>
                  </v-btn>
                </v-col>
                <v-col md="2">
                  <v-btn icon v-on:click="deleteTask(sendTodo)">
                    <v-icon color="red"> mdi-delete</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card-action>
        </v-card>
</template>
<script>
export default {
    name:'Card',
    props:['sendTodo'],
    methods:{
      donTask(sendTodo){
        console.log(sendTodo);
        this.$store.commit('addToDoneTask' , sendTodo.id);
        this.$store.dispatch("sendDataMessage", {
              message: "Your Task add to Complete",
              status: 200,
              settimeout: 3,
            });
      },
      deleteTask(sendTodo){
        this.$store.commit('removeTask' , sendTodo.id);
        this.$store.dispatch("sendDataMessage", {
              message: "Your Task remove successfully",
              status: 400,
              settimeout: 3,
            });
      }
    }
}
</script>

<style>

</style>