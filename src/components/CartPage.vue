<template>
  <h1 style="text-align: center; margin: 30px">Cart Page</h1>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template v-slot:item.src="{ item }">
      <v-img
        v-if="item.src"
        :src="item.src"
        max-width="100%"
        max-height="150px"
        style="padding: 10px"
      ></v-img>
    </template>
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
                  <v-img
                    v-if="editedItem.src"
                    readonly
                    :src="editedItem.src"
                    max-width="100%"
                    max-height="150px"
                  ></v-img>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    readonly
                    v-model="editedItem.title"
                    label="Product Title"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.quantity"
                    label="Quantity"
                    type="number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    readonly
                    v-model="totalPrice"
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
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
export default {
  data: () => ({
    singlePrice: 0,
    dialog: false,
    dialogDelete: false,
    headers: [
      { title: "Image", key: "src", align: "start", sortable: false },
      {
        title: "Product Name",

        key: "title",
      },
      { title: "Quantity", key: "quantity" },
      { title: "Price", key: "price" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      src: "",
      description: "",
      price: 0,
      quan: 0,
    },
    defaultItem: {
      title: "",
      quan: 0,
      src: "",
      price: 0,
      description: "",
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

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      const books = [
        {
          id: 1,
          author: "Author01",
          title: "Book Title 01",
          quantity: 5,
          price: 2000,
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          description:
            "This is all the description we need about this single product",
          rating: 4.5,
        },
        {
          id: 2,
          quantity: 5,
          author: "Author02",
          title: "Book Title 02",
          description:
            "This is all the description we need about this single product",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          rating: 1,
          price: 2000,
        },

        {
          id: 3,
          quantity: 5,
          author: "Author03",
          title: "Book Title 03",
          description:
            "This is all the description we need about this single product",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          rating: 2,
          price: 2000,
        },
        {
          id: 4,
          quantity: 5,
          description:
            "This is all the description we need about this single product",
          author: "Author04",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          title: "Book Title 04",
          rating: 3,
          price: 2000,
        },
        {
          id: 5,
          quantity: 5,
          description:
            "This is all the description we need about this single product",
          author: "Author05",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          title: "Book Title 05",
          rating: 4.0,
          price: 2000,
        },
        {
          id: 6,
          quantity: 5,
          description:
            "This is all the description we need about this single product",
          author: "Author06",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

          title: "Book Title 06",
          price: 2000,

          rating: 4.1,
        },
        {
          id: 7,
          quantity: 5,
          description:
            "This is all the description we need about this single product",
          author: "Author07",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          price: 2000,

          title: "Book Title 07",
          rating: 4.0,
        },

        {
          id: 8,
          quantity: 5,
          price: 2000,

          description:
            "This is all the description we need about this single product",
          author: "Author08",
          title: "Book Title 08",
          src: "https://picsum.photos/500/300?image=232",
          rating: 3.5,
        },
      ];
      this.desserts = books;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.singlePrice = this.editedItem.price / this.editedItem.quantity;
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
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

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
