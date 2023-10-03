<template>
  <v-app>
    <HomeNavbar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import LandingPage from "./LandingPage.vue";
import Footer from "./Footer.vue";
import HomeNavbar from "./HomeNavbar.vue";
export default {
  components: {
    LandingPage,
    HomeNavbar,
    Footer,
  },
};
</script>
<style>
/* Media query for screens with a maximum width of 768px (typical mobile devices) */
@media (max-width: 768px) {
  .logo {
    margin-left: 40px;
  }
  .navContent {
    display: none; /* Hide the navContent */
  }
}
</style>
