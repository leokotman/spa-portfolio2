<template>
  <v-footer v-bind="localAttrs" :padless="padless">
    <v-card width="100%">
      <v-card-text>
        <span>
          <v-icon>{{ icons.address }}</v-icon> {{ address }}
        </span>
        <v-btn v-for="contact in contacts" :key="contact.index">
          <v-icon v-if="contact == contacts[0]"> {{ icons.phone }}</v-icon>
          <v-icon v-if="contact == contacts[1]"> {{ icons.chat }}</v-icon>
          {{ contact }}
        </v-btn>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Lev Kotman</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  inject: ["address", "contacts"],
  data() {
    return {
      icons: {
        phone: "mdi-phone",
        chat: "mdi-whatsapp",
        address: "mdi-map-marker",
      },
      padless: true,
      variant: "fixed",
    };
  },
  computed: {
    localAttrs() {
      const attrs = {};
      if (this.variant === "default") {
        attrs.absolute = false;
        attrs.fixed = false;
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    },
  },
};
</script>

<style scoped>
.v-footer {
  text-align: center;
}

.v-card {
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: #11005c;
}
.v-card__text:first-of-type {
  display: flex;
  justify-content: space-around;
}

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
