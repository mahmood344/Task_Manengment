import Vue from "vue";
import Vuex from "vuex";
import router from '../router/index.js'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
   token: null,
   messageApi: null,
   todos: null
  },
  getters: {
    getMessageApi(state){
      return state.messageApi;
    } ,
    getToken(){
      return localStorage.getItem('token');
    },
    getTodos(state){
      return state.todos;
    },
    getTodosDone(state){
      return state.todos.filter((todo)=>{
        return todo.completed == true;
      })
    },
    getTodoIncomplete(state){
      return state.todos.filter((todo)=>{
        return todo.completed == false;
      })
    },
    searchTitle:(state)=>(title)=>{
      let result = state.todos.find((todo)=>{
        return todo.title == title;
      })
        if(result){
          state.todos = result;
        }
        else{
          return state.todos
        }
    }
  },
  mutations: {
    setMessageApi(state , payload){
      state.messageApi = payload;
    },
    setToken(state , payload){
      state.token = payload;
      localStorage.setItem('token' , state.token)
      router.push({name:'Home'})
      window.location.reload();
    },
    clearToken(state){
      state.token = '';
      localStorage.removeItem('token');
      router.push({name:'Login'});
      window.location.reload();
    },
    setTodos(state , payload){
      state.todos = payload;
    },
    addToDoneTask(state , payload){
      console.log(payload);
    let result = state.todos.find((todo)=>{
        return todo.id == payload;
      });
      result.completed = true;
    },
    removeTask(state , payload){
      state.todos= state.todos.filter((todo)=>{
       return todo.id != payload;
      })
    }
  },
  actions: {
    sendDataMessage(context , payload){
      context.commit('setMessageApi' , payload);
    },
    sendToken(context , payload){
      context.commit('setToken' , payload);
    },
    sendTodos(context , payload){
      context.commit('setTodos' , payload)
    }
  },
  modules: {},
});
