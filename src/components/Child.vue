<template>
  <div>
    <input v-model="inputText" placeholder="Escribe un mensaje" />
    <button @click="sendMessage">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    sendMessage() {
      this.$emit('sendMessage', this.inputText);
      this.inputText = '';
    }
  }
};
</script>
