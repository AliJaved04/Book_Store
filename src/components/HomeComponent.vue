<template>
  <div class="container">
    <v-app>
      <HomeNavbar />
      <v-main>
        <HomeCarosel style="margin-bottom: 50px" />
        <BooksCatalog />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import BooksCatalog from "./BooksCatalog.vue";
import HomeCarosel from "./HomeCarosel.vue";
import HomeNavbar from "./HomeNavbar.vue";
export default {
  components: {
    HomeCarosel,
    HomeNavbar,
    BooksCatalog,
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
