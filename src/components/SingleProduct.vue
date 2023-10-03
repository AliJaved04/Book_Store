<template>
  <v-container>
    <div class="single">
      <div>
        <v-img :src="product.cover_image_url" height="400"></v-img>
      </div>
      <div>
        <h1 style="color: #3e976c">{{ product.title }}</h1>

        <p style="color: #3e976c">
          Author Name: <strong>{{ product.author }}</strong>
        </p>

        <p>{{ product.description }}</p>

        <h2 style="color: #3e976c">Price: ${{ product.price * quantity }}</h2>

        <input
          class="quan"
          v-model="quantity"
          outlined
          type="number"
          style="max-width: 140px; margin-right: 10px"
          min="1"
        />
        <v-btn color="#3e976c">Add to Cart</v-btn>
      </div>
    </div>

    <!-- <v-card>
      <v-card-title style="color: #125a18">Customer Reviews</v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(review, index) in book.reviews" :key="index">
          <v-list-item-title>{{ review.title }}</v-list-item-title>
          <v-list-item-subtitle style="color: #125a18"
            >Rating: {{ review.rating }}/5</v-list-item-subtitle
          >
          <v-list-item-content>{{ review.comment }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card>
      <v-card-title style="color: #ff6e40">Related Books</v-card-title>
      <v-divider></v-divider>
      <v-row>
        <v-col
          v-for="relatedBook in book.relatedBooks"
          :key="relatedBook.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card>
            <v-img :src="relatedBook.coverImage" height="200"></v-img>
            <v-card-title style="color: #ff6e40">{{
              relatedBook.title
            }}</v-card-title>
            <v-card-subtitle>{{ relatedBook.author }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="#ff6e40">View Details</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card> -->
  </v-container>
</template>

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
      quantity: 1,
    };
  },
  mounted() {
    this.$store.dispatch("book/fetchBooks");
    this.list = this.getBookList.filter(
      (book) => book.id == this.$route.params.product_id
    );
    this.product = this.list[0];
    this.price = this.product.price;
  },
};
</script>
<style scoped>
.single {
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background-color: #fff;
}

.quan {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}
.cartDiv {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}
</style>
