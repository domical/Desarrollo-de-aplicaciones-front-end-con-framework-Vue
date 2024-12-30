<!-- src/views/PageNotFound.vue -->
<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Oops! La página que buscas no existe.</p>
    <router-link to="/">Volver a la página de inicio</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
</style>