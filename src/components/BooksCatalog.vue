<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-center">Popular Products</h1>
      </v-col>
    </v-row>
    <v-row style="margin-top: 100px">
      <v-col v-for="book in getBookList" :key="book.id" cols="12" sm="6" md="4">
        <BookCard :book="book" />
      </v-col>
    </v-row>

    <div class="btnDiv">
      <router-link to="/allproducts"
        ><v-btn class="all_prod">All Products</v-btn></router-link
      >
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BookCard from "./BookCard.vue";
export default {
  components: {
    BookCard,
  },
  computed: {
    ...mapGetters("book", ["getBookList"]),
  },
  methods: {
    ...mapActions("book", ["fetchBooks"]),
  },

  beforeMount() {
    this.fetchBooks();
    this.$toast.success("This is a success toast");
  },
};
</script>

<style scoped>
.all_prod {
  background-color: #bdefd7;
  font-weight: 600;
  font-size: 12px;
  border-radius: 999px;
  padding: 11px 31px;
  color: black;
}
.btnDiv {
  display: flex;
  min-width: 50vw;
  min-height: 50vh;
  align-items: center;
  justify-content: center;
}
</style>
