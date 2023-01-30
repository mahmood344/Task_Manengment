<template>
  <nav>
    <v-toolbar class="z-index" :color="getToken ? 'purple lighten-4' : ''">
      <v-row>
        <v-col md="2" :class="getToken ? 'mt-9' : 'mt-2'">
          <v-toolbar-title>
            <span class="font-weight-bold">Task</span>
            <span class="subtitle-2"> Manegment</span>
          </v-toolbar-title>
        </v-col>

        <v-col md="5" class="mt-9">
          <span v-if="getToken">
            <v-row justify="center">
              <v-col md="4" class="text-center">
              <router-link class="text-decoration-none" :to="{name:'Home'}">All Task</router-link>
              </v-col>
              <v-col md="4">
                <router-link class="text-decoration-none" :to="{name:'TodoDone'}">Complete Task</router-link>
              </v-col>
              <v-col md="4" class="text-start">
                <router-link class="text-decoration-none" :to="{name:'Incomplete'}">Incomplete Task</router-link>
              </v-col>
            </v-row>
          </span>
        </v-col>
        <v-col md="4" class="mt-6">
          <v-text-field
            v-if="getToken"
            v-model="search"
            v-on:keyup="searchTask()"
            label="search"
            outlined
            rounded
            dense
            prepend-inner-icon="mdi-magnify"
          >
          </v-text-field>
        </v-col>
        <v-col md="1" class="mt-6 text-end">
          <v-btn icon v-if="getToken" v-on:click="logOut()">
            <v-icon> mdi-logout-variant </v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-tab-item> </v-tab-item>
    </v-toolbar>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      search: null
    };
  },
  computed: {
    ...mapGetters(["getToken"]),
  },
  methods:{
    logOut(){
      this.$store.commit('clearToken');
      this.$store.dispatch("sendDataMessage", {
              message: "Exit successfully",
              status: 200,
              settimeout: 3,
            });
    },
    searchTask(){
      this.$store.getters.searchTitle(this.search);
    }
  }
};
</script>

<style lang="scss" scoped>
.z-index {
  z-index: 1;
}
.border {
  border: 1px solid black;
}
.router-link-exact-active{
  color: red;
}
</style>