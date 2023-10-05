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
              height="400px"
              cover
            >
              <v-card-title
                class="text-white"
                v-text="book.title"
              ></v-card-title>
            </v-img>

            <div class="bottom_data">
              <label class="title_product">Price: ${{ book.price }}</label>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  v-if="isAdmin"
                  size="small"
                  color="surface-variant"
                  variant="text"
                  @click="updateBook(book)"
                  >Update Book</v-btn
                >
                <v-btn
                  v-if="isAdmin"
                  size="small"
                  color="surface-variant"
                  variant="text"
                  @click="deleteBook(book.id)"
                  >Delete Book</v-btn
                >

                <v-btn
                  v-if="!isAdmin"
                  size="small"
                  color="surface-variant"
                  variant="text"
                  @click="detailPage(book.id)"
                  >Details</v-btn
                >

                <v-dialog v-model="dialog" max-width="500px">
                  <v-card>
                    <v-card-title>Edit Product</v-card-title>
                    <v-card-text>
                      <v-form>
                        <v-text-field
                          v-model="product.title"
                          label="Title"
                        ></v-text-field>
                        <v-textarea
                          v-model="product.description"
                          label="Description"
                        ></v-textarea>
                        <v-text-field
                          v-model="product.cover_image_url"
                          label="Image URL"
                        ></v-text-field>
                        <v-text-field
                          v-model="product.price"
                          label="Price"
                          type="number"
                        ></v-text-field>
                        <v-text-field
                          v-model="product.author"
                          label="Author"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn @click="saveChanges">Save</v-btn>
                      <v-btn @click="closeDialog">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
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
  data() {
    return {
      product: {},
      isAuth: false,
      isAdmin: false,
      isUser: false,
      dialog: false,
    };
  },
  props: {
    book: Object,
  },
  beforeMount() {
    if (localStorage.getItem("access_token")) {
      this.isAuth = true;
      if (localStorage.getItem("email") === "admin@gmail.com") {
        this.isAdmin = true;
      } else {
        this.isUser = true;
      }
    }
  },
  methods: {
    ...mapActions("wishlist", ["addToWishList"]),
    ...mapActions("book", ["deleteABook"]),
    ...mapActions("book", ["updateABook"]),
    detailPage(id) {
      this.$router.push({
        name: "SingleProduct",
        params: { product_id: id },
      });
    },
    async deleteBook(id) {
      const res = await this.deleteABook(id);
      console.log(res);
      if (res.message === "Book deleted") {
        console.log("Book Deleted");
      }
    },
    async updateBook(book) {
      this.product = book;
      this.dialog = true;
    },
    async wishlist(id) {
      const res = await this.addToWishList(id);
      if (res.message === "Item added to wishlist") {
        console.log("Item Added");
      }
    },

    closeDialog() {
      this.dialog = false;
    },
    async saveChanges() {
      const res = await this.updateABook(this.product);
      if (res.message === "Book updated") {
        console.log("Book Updated");
      }
      this.dialog = false;
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
