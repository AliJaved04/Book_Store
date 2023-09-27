<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="flex-container">
          <div class="flex-item">
            <v-img :src="product.src"> </v-img>
          </div>
          <div class="flex-item1">
            <h3 class="product-title">{{ product.title }}</h3>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.product_title {
  font-size: 18px;
  font-weight: normal;
  font-family: inherit;
  font-family: Poppi;
}
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 16px;
  background-color: #f9f9f9;
}

.flex-item {
  flex: 1;
  margin: 8px;
  padding: 16px;
  background-color: #f0f0f0;
}
.flex-item1 {
  flex: 1;
  margin: 8px;
  padding: 16px;
  background-color: #f9f9f9;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("book", ["getBookList"]),
  },
  data() {
    return {
      list: [],
      product: {},
    };
  },
  mounted() {
    this.$store.dispatch("book/fetchBooks");
    this.list = this.getBookList.filter(
      (book) => book.id == this.$route.params.product_id
    );
    this.product = this.list[0];
    console.log(this.product.src);
  },
};
</script>
