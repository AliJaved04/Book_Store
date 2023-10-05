<template>
  <h1 style="text-align: center; margin: 30px">Cart Page</h1>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:top>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    readonly
                    v-model="editedItem.book_id"
                    label="Product Title"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    type="number"
                    label="quantity"
                    v-model="editedItem.quantity"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    readonly
                    v-model="editedItem.price"
                    label="Price"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="close">
              Cancel
            </v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="save">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogDelete" class="custom" max-width="500px">
        <v-card>
          <v-card-title class="text-h5"
            >Are you sure you want to delete this item?</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
              >Cancel</v-btn
            >
            <v-btn
              color="blue-darken-1"
              variant="text"
              @click="deleteItemConfirm"
              >OK</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item)">
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
  <div class="btnDiv">
    <v-btn color="#3e976c" @click="checkout">Checkout</v-btn>
  </div>
  <v-snackbar v-model="snackbar">
    Order Placed Successfully
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="updateOrder">
    Order Updated Successfully
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="updateOrder = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="deleteOrder">
    Order Deleted Successfully
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="deleteOrder = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    singlePrice: 0,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "Product Id",

        key: "book_id",
      },
      { title: "Quantity", key: "quantity" },
      { title: "Price", key: "price" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    delete_id: 0,
    desserts: [],
    updateOrder: false,
    deleteOrder: false,
    editedIndex: -1,
    editedItem: {
      book_id: "",
      price: 0,
      quantity: 0,
    },
    snackbar: false,
    defaultItem: {
      book_id: "",
      quantity: 0,
      price: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },

    totalPrice() {
      return this.editedItem.quantity * this.singlePrice;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  async beforeMount() {
    const res = await this.getCartItems();
    this.desserts = res.cart;
  },

  methods: {
    ...mapActions("cart", ["getCartItems"]),
    ...mapActions("cart", ["updateCart"]),
    ...mapActions("cart", ["deleteCartItem"]),
    ...mapActions("cart", ["placeOrder"]),

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.singlePrice = this.editedItem.price / this.editedItem.quantity;
      this.dialog = true;
    },

    async checkout() {
      try {
        const res = await this.placeOrder();
        if (res) {
          this.snackbar = true;
          this.desserts = [];
        }
      } catch (error) {}
    },
    async deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.delete_id = item.id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      const res = await this.deleteCartItem(this.delete_id);
      if (res.message === "Cart item removed") {
        this.deleteOrder = true;
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }

      const res = await this.updateCart(this.editedItem);
      if (res.message === "Cart item updated") {
        this.updateOrder = true;
      }
      this.close();
    },
  },
};
</script>
<style scoped>
.btnDiv {
  display: flex;
  min-width: 30vw;
  min-height: 30vh;
  align-items: center;
  justify-content: center;
}
</style>
