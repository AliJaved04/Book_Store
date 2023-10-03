<template>
  <v-card class="mx-auto" max-width="500">
    <v-container fluid>
      <v-row dense>
        <v-col :cols="12">
          <v-card class="zoom">
            <v-img
              :src="book.cover_image_url"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title
                class="text-white"
                v-text="book.title"
              ></v-card-title>
            </v-img>

            <div class="bottom_data">
              <label class="title_product">Price: ${{ book.price }}</label>

              <div>
                <v-rating
                  :readonly="true"
                  v-model="book.rating"
                  :half-increments="true"
                  color="amber"
                ></v-rating>
              </div>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn size="small" color="surface-variant" variant="text"
                  >Add to Cart</v-btn
                >

                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  @click="wishlist(book.id)"
                  >Wishlist</v-btn
                >
                <v-btn
                  size="small"
                  color="surface-variant"
                  variant="text"
                  @click="detailPage(book.id)"
                  >Details</v-btn
                >
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    rating: 4,
  }),

  props: {
    book: Object,
  },
  methods: {
    ...mapActions("book", ["addToWishList"]),
    detailPage(id) {
      this.$router.push({
        name: "SingleProduct",
        params: { product_id: id },
      });
    },
    async wishlist(id) {
      const res = await this.addToWishList(id);
      if (res.message === "Item added to wishlist") {
        console.log("Item Added");
      }
    },
  },
};
</script>

<style scoped>
.title_product {
  font-weight: bold;
  font-size: 12px;
  margin-left: 15px;
  text-transform: uppercase;
  background-color: transparent;
  color: #7a7a7a;
}

.bottom_data {
  margin: 10px;
}

.zoom {
  transition: transform 0.3s ease; /* Add a CSS transition for the transform property */
  overflow: hidden; /* Ensure that any overflow content is hidden */
}

.zoom:hover {
  transform: scale(1.05); /* Apply a scale transformation on hover (zoom in) */
}
</style>
