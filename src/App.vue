<template>
<v-app>
  <Nav />
  <router-view></router-view> 
  <Message />
</v-app>
</template>

<script>
import {mapGetters} from 'vuex';
import Nav from './components/Nav.vue';
import Message from './components/Message.vue';
export default {
  name: "App",
  components:{
    Nav,
    Message
  } ,
  data: () => ({
    
  }),
  computed:{
    ...mapGetters([
      'getMessageApi'
    ])}
};
</script>
