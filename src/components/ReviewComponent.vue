<template>
  <div>
    <v-row style="margin: 20px">
      <v-col v-for="item in orderList" key="item.id" cols="12" sm="6" md="4">
        <OrderItems :item="item" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import OrderItems from "./OrderItems.vue";
import axios from "axios";
export default {
  components: {
    OrderItems,
  },
  data() {
    return {
      orderList: [],
    };
  },

  async beforeMount() {
    const response = await axios.get(
      `http://10.0.10.211:3300/api/orderItems/${this.$route.params.order_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      }
    );
    this.orderList = response.data;
  },
};
</script>
