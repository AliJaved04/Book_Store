<template>
  <v-app>
    <v-main>
      <HomeCarosel style="margin-bottom: 50px" />
      <BooksCatalog />
    </v-main>
  </v-app>
</template>

<script>
import HomeCarosel from "./HomeCarosel.vue";
import BooksCatalog from "./BooksCatalog.vue";

export default {
  components: {
    HomeCarosel,
    BooksCatalog,
  },
};
</script>
