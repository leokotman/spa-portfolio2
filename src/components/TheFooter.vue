<template>
  <footer>
    <h2>Footer</h2>
    <ul>
      <li>{{ address }}</li>
      <li v-for="contact in contacts" :key="contact.index">{{ contact }}</li>
    </ul>
  </footer>
</template>

<script>
export default {
  inject: ["address", "contacts"],
};
</script>

<style scoped>
h2 {
  text-align: center;
}

ul {
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
}
</style>
