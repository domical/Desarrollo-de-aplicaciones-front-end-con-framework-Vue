import { createStore } from "vuex"
const store = createStore({
  state(){
    return{
      contador:0,
    };
  },
  mutations:{
    incrementar(state){
      state.contador++;
    },
    decrementar(state){
      state.contador--;
    }
  }
});
export default store;