import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   token: null,
   messageApi: null,
  },
  getters: {
    getMessageApi(state){
      return state.messageApi;
    } ,
    gettoken(state){
      return state.token;
    }
  },
  mutations: {
    setMessageApi(state , payload){
      state.messageApi = payload;
    },
    setToken(state , payload){
      state.token = payload;
    },
  },
  actions: {
    sendDataMessage(context , payload){
      context.commit('setMessageApi' , payload);
    },
    setToken(context){
      context.commit('setToken' , payload);
    }
  },
  modules: {},
});
