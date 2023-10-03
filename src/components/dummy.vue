<template>
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
                  <v-text-field
                    v-model="editedItem.title"
                    label="Product Title"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-img
                    v-if="editedItem.src"
                    :src="editedItem.src"
                    max-width="100%"
                    max-height="150px"
                  ></v-img>
                </v-col>

                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editedItem.price"
                    label="Fat (g)"
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
      <v-dialog v-model="dialogDelete" max-width="500px">
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
    dialog: false,
    dialogDelete: false,
    headers: [
      { title: "Image", key: "src", align: "start", sortable: false },
      {
        title: "Product Name",

        key: "title",
      },
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
    },
    defaultItem: {
      title: "",
      src: "",
      description: "",
      price: 0,
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
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          description:
            "This is all the description we need about this single product",
          price: 500,
          rating: 4.5,
        },
        {
          id: 2,
          author: "Author02",
          title: "Book Title 02",
          description:
            "This is all the description we need about this single product",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          price: 500,
          rating: 1,
        },

        {
          id: 3,
          author: "Author03",
          title: "Book Title 03",
          description:
            "This is all the description we need about this single product",
          price: 500,
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          rating: 2,
        },
        {
          id: 4,
          description:
            "This is all the description we need about this single product",
          author: "Author04",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          title: "Book Title 04",
          price: 500,
          rating: 3,
        },
        {
          id: 5,
          description:
            "This is all the description we need about this single product",
          author: "Author05",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
          title: "Book Title 05",
          price: 500,
          rating: 4.0,
        },
        {
          id: 6,
          description:
            "This is all the description we need about this single product",
          author: "Author06",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

          title: "Book Title 06",
          price: 500,
          rating: 4.1,
        },
        {
          id: 7,
          description:
            "This is all the description we need about this single product",
          author: "Author07",
          src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",

          title: "Book Title 07",
          price: 500,
          rating: 4.0,
        },

        {
          id: 8,
          description:
            "This is all the description we need about this single product",
          author: "Author08",
          title: "Book Title 08",
          src: "https://picsum.photos/500/300?image=232",
          price: 500,
          rating: 3.5,
        },
      ];
      this.desserts = books;
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
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
