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
      editedItem: {},
    };
  },
  methods: {
    ...mapActions("cart", ["showOrdersUser"]),
    ...mapActions("cart", ["getOrderItems"]),

    reviewHandler(item) {
      this.getOrderItems(item.id);
    },

    async getOrderItems(id) {
      const response = await axios.get(
        `http://10.0.10.211:3300/api/orderitems/show/${4}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log(response.data);
    },
  },
  async beforeMount() {
    const res = await this.showOrdersUser();
    this.orderList = res;
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
