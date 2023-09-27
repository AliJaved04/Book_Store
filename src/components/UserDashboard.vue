<template>
  <v-app>
    <UserNavbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import UserNavbar from "./UserNavbar.vue";
export default {
  name: "App",

  components: {
    UserNavbar,
  },
};
</script>
