<template>
  <div>
    <v-data-table :headers="headers" :items="orderList" class="elevation-1">
    </v-data-table>
  </div>
</template>
<script>
import { mapActions } from "vuex";
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
      ],
      dialog: false,
      dialogDelete: false,
      editedItem: {},
    };
  },
  methods: {
    ...mapActions("cart", ["showOrdersUser"]),
  },
  async beforeMount() {
    const res = await this.showOrdersUser();
    console.log(res);
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
