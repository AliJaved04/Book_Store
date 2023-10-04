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
                    label="UserID"
                    v-model="editedItem.user_id"
                  >
                  </v-text-field>
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
      { title: "User ID", key: "user_id" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    delete_id: 0,
    desserts: [],
    editedIndex: -1,
    editedItem: {
      book_id: 0,
      user_id: 0,
    },
    defaultItem: {
      book_id: 0,
      user_id: 0,
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
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
    const res = await this.showWishList();
    this.desserts = res.wishlist;
  },

  methods: {
    ...mapActions("wishlist", ["showWishList"]),
    ...mapActions("wishlist", ["removeWishList"]),

    async deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.delete_id = item.book_id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      const res = await this.removeWishList(this.delete_id);
      if (res.message === "Item removed from wishlist") {
        console.log("Item Removed");
      }
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
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
