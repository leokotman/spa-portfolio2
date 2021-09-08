<template>
  <h2>Footer</h2>
  <ul>
    <li>{{ address }}</li>
    <li v-for="contact in contacts" :key="contact.index">{{ contact }}</li>
  </ul>
</template>

<script>
export default {
  inject: ["address", "contacts"],
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
}
</style>
