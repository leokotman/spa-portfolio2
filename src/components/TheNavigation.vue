<template>
  <header>
    <nav>
      <ul>
        <li>
          <v-btn @click="toggleActivity">
            <router-link to="/spa-portfolio2">Main</router-link>
          </v-btn>
        </li>
        <li>
          <v-btn>
            <router-link to="/spa-portfolio2/projects">Projects</router-link>
          </v-btn>
        </li>
        <li>
          <v-btn>
            <router-link to="/spa-portfolio2/contacts">Contacts</router-link>
          </v-btn>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleActivity(event) {
      event.stopPropagation();
      event.target.setAttribute("color", "error");
      event.target.setAttribute("large", "");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
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
