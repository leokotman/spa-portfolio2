<template>
  <main>
    <h1>Projects page</h1>
    <nav>
      <v-btn small><router-link to="/sites">Websites</router-link></v-btn>
      <v-btn small><router-link to="/games">Games</router-link></v-btn>
    </nav>
    <router-view></router-view>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  text-decoration: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active,
a.router-link-exact-active {
  color: #f1a80a;
  border-color: #f1a80a;
}
</style>
