<template>
  <div>
    <h1>Mensaje del hijo: {{ message }}</h1>
    <Child @sendMessage="updateMessage" />
  </div>
</template>

<script>
import Child from './Child.vue';

export default {
  components: { Child },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    updateMessage(msg) {
      this.message = msg;
    }
  }
};
</script>
