<template>
  <h1 style="text-align: center; margin: 30px">All Users</h1>
  <v-data-table :headers="headers" :items="users" class="elevation-1">
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
      <v-icon
        size="small"
        v-if="item.email !== 'admin@gmail.com'"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    dialogDelete: false,
    headers: [
      { title: "Name", key: "name", align: "start", sortable: false },
      { title: "User Id", key: "id" },

      {
        title: "Email",

        key: "email",
      },
      { title: "Subscribed", key: "subscription" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    users: [],
    user_id: 0,

    defaultItem: {
      name: "",
      email: "",
      id: "",
      subscription: "",
      id: "",
    },
  }),

  watch: {
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  async beforeMount() {
    const res = await this.showAllUsers();
    this.users = res;
  },
  methods: {
    ...mapActions("user_module", ["showAllUsers"]),

    ...mapActions("wishlist_module", ["showWishList"]),

    ...mapActions("user_module", ["deleteUser"]),

    deleteItem(item) {
      this.user_id = item.id;
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      const res = await this.deleteUser(this.user_id);
      if (res.message === "Profile deleted") {
        console.log("User profile deleted");
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
  },
};
</script>
