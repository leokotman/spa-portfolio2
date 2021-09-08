<template>
  <main>
    <h1>Contacts page</h1>
    <ul>
      <li v-for="contact in contacts" :key="contact.index">
        <a :href="'tel:+' + contact">{{ contact }}</a>
      </li>
    </ul>
    <ul>
      <li v-for="link in webLinks" :key="link.name">
        <a :href="link.link">{{ link.name }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  inject: ["address", "contacts", "webLinks"],
};
</script>

<style scoped>
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
h1 {
  width: 100%;
  text-align: center;
}
</style>
