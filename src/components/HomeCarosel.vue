<template>
  <div class="container">
    <v-carousel hide-delimiters>
      <v-carousel-item src="home1.jpg" class="item" cover></v-carousel-item>
      <v-carousel-item src="home2.jpg" class="item" cover></v-carousel-item>
      <v-carousel-item src="home3.jpg" class="item" cover></v-carousel-item>
      <v-carousel-item src="home4.jpg" class="item" cover></v-carousel-item>
      <v-carousel-item src="home5.jpg" class="item" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("book", ["getBookList"]),
  },
  methods: {
    ...mapActions("book", ["fetchPopularBooks"]),
  },
  beforeMount() {
    this.fetchPopularBooks();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
