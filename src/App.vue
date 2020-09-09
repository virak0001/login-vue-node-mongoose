<template>
  <v-app>
    <Navegation v-if="isLoggedIn" /> 
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navegation from "./components/Navegation";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    Navegation
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  data: () => ({
    //
  })
};
</script>
