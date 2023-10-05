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

        <div>
          <v-rating
            :readonly="true"
            v-model="product.rating"
            :half-increments="true"
            color="amber"
          ></v-rating>
        </div>
        <input
          class="quan"
          v-model="quantity"
          outlined
          type="number"
          style="max-width: 140px; margin-right: 10px"
          min="1"
        />
        <v-btn color="#3e976c" @click="cartHandler">Add to Cart</v-btn>
        <v-btn color="#3e976c" style="margin-left: 10px" @click="gotoCart"
          >Go to Cart</v-btn
        >
      </div>
    </div>
  </v-container>
  <v-snackbar v-model="snackbar">
    Item Added to Cart
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("book", ["getBookList"]),
  },
  data() {
    return {
      list: [],
      product: {},
      quantity: 1,
      cartItem: {},
      snackbar: false,
    };
  },

  methods: {
    ...mapActions("book", ["getSingleBook"]),
    ...mapActions("cart", ["addToCart"]),
    async cartHandler() {
      this.cartItem.user_id = localStorage.getItem("user_id");
      this.cartItem.quantity = this.quantity;
      this.cartItem.book_id = this.product.id;
      this.cartItem.price = this.product.price;
      const res = await this.addToCart(this.cartItem);
      if (res.message === "Item added to cart") {
        this.snackbar = true;
      }
    },

    gotoCart() {
      this.$router.push("/cartPage");
    },
  },
  async mounted() {
    this.$store.dispatch("book/fetchBooks");
    this.product = await this.getSingleBook(this.$route.params.product_id);
    console.log(this.product);
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
