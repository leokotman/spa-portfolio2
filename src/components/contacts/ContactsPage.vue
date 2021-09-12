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
    <v-card class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1501546.5340215224!2d18.269279135926663!3d42.68872573668996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134c3217242c1fcb%3A0x384c9d866effd346!2sMontenegro!5e0!3m2!1sen!2s!4v1613007567467!5m2!1sen!2s"
        width="100%"
        height="300"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
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
  gap: 1rem;
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
  color: darkblue;
}

.map {
  width: 100%;
  padding: 2rem 0;
}
</style>
