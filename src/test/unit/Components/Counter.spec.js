import { shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
  let store;
  let state;

  beforeEach(() => {
    state = {
      counter: 0
    };
    store = new Vuex.Store({
      state,
      mutations: {
        increment: (state) => {
          state.counter++;
        },
        decrement: (state) => {
          state.counter--;
        }
      }
    });
  });

  it('verifica el valor inicial del contador', () => {
    const wrapper = shallowMount(Counter, { store });
    expect(wrapper.find('h1').text()).toBe('Contador: 0');
  });

  it('prueba la funcionalidad de incremento', async () => {
    const wrapper = shallowMount(Counter, { store });
    await wrapper.find('button').trigger('click'); // Incrementar
    expect(wrapper.find('h1').text()).toBe('Contador: 1');
  });

  it('prueba la funcionalidad de decremento', async () => {
    store.commit('increment'); // Incrementar primero
    const wrapper = shallowMount(Counter, { store });
    await wrapper.findAll('button').at(1).trigger('click'); // Decrementar
    expect(wrapper.find('h1').text()).toBe('Contador: 0');
  });
});
