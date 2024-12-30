import store from '@/store/index.js'

describe('Vuex - Contador', () => {
  beforeEach(() => {
    store.state.contador = 0;
  });

  test('Contador inicia siendo 0', () => {
    expect(store.state.contador).toBe(0);
  });
  
  test('Incrementar el contador', () => {
    store.commit('incrementar');
    expect(store.state.contador).toBe(1);
  });
  
  test('Decrementar el contador', () => {
    store.commit('decrementar');
    expect(store.state.contador).toBe(-1);
  });

});  


