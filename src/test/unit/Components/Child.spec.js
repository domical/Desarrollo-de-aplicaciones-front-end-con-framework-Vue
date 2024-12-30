import { shallowMount } from '@vue/test-utils';
import Child from '@/components/Child.vue';

describe('Child.vue', () => {
  it('debería emitir un mensaje al hacer clic en el botón', async () => {
    const wrapper = shallowMount(Child);
    const input = wrapper.find('input');
    await input.setValue('Hola, padre!');
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')).toBeTruthy();
    expect(wrapper.emitted('sendMessage')[0]).toEqual(['Hola, padre!']);
  });
});
