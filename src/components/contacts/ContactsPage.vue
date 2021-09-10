<template>
  <main>
    <h1>Contacts page</h1>
    <v-card tile max-width="300">
      <v-list rounded>
        <v-list-item-group
          ><v-list-item v-for="contact in contacts" :key="contact.index">
            <v-list-item-icon>
              <v-icon v-text="icons.contacts"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <a :href="'tel:' + contact">
                  {{ contact }}
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <v-card tile max-width="300">
      <v-list rounded>
        <v-list-item-group
          ><v-list-item v-for="link in webLinks" :key="link.name">
            <v-list-item-icon>
              <v-icon v-text="icons.links"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <a :href="link.link">
                  {{ link.name }}
                </a>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </main>
</template>

<script>
export default {
  inject: ["address", "contacts", "webLinks"],
  data() {
    return {
      icons: { contacts: "mdi-phone", links: "mdi-web" },
    };
  },
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

.v-list-item {
  min-height: 60px;
  background-color: rgb(248, 246, 246);
}
.v-list-item--active {
  background-color: lightblue;
}
.v-list-item--active a {
  color: white;
}

a {
  text-decoration: none;
  color:darkblue;
}
</style>
