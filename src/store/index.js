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
    }
  },
  mutations: {
    setMessageApi(state , payload){
      state.messageApi = payload;
    }
  },
  actions: {
    sendDataMessage(context , payload){
      context.commit(setMessageApi , payload);
    }
  },
  modules: {},
});
