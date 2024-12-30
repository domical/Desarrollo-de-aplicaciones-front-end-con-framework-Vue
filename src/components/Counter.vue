<template>
  <div>
    <h1>Contador: {{ counter }}</h1>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['counter'])
  },
  methods: {
    ...mapActions(['increment', 'decrement'])
  }
};
</script>
