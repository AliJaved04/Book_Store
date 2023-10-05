<template>
  <div>
    <v-data-table :headers="headers" :items="orderList" class="elevation-1">
      <template v-slot:item.actions="{ item }">
        <v-btn v-if="item.status === 'completed'" @click="reviewHandler(item)">
          Review</v-btn
        >
      </template>
    </v-data-table>
  </div>
  <v-snackbar v-model="errorBar">
    User Does not have any orders
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="errorBar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      orderList: [],
      headers: [
        {
          title: "Order Id",

          key: "id",
        },
        { title: "UserID", key: "user_id" },
        { title: "Order Status", key: "status" },
        { title: "Actions", key: "actions", sortable: false },
      ],
      dialog: false,
      dialogDelete: false,
      order_items: {},
      editedItem: {},
      errorBar: false,
    };
  },
  methods: {
    ...mapActions("cart", ["showOrdersUser"]),

    reviewHandler(item) {
      this.getOrderItems(item.id);
    },

    async getOrderItems(id) {
      this.$router.push({
        name: "ReviewComponent",
        params: { order_id: id },
      });
    },
  },
  async beforeMount() {
    try {
      const res = await this.showOrdersUser();
      this.orderList = res;
    } catch (error) {
      this.errorBar = true;
    }
  },
};
</script>

<style>
.card {
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  min-width: 300px;
  height: 150px;
}
</style>
