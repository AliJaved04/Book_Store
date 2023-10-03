<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12">
          <h1 class="text-center">My Orders</h1>
        </v-col>
      </v-row>
      <v-row style="margin-top: 20px">
        <v-col
          class="card"
          v-for="order in orderList"
          :key="order.OrderId"
          cols="12"
          sm="6"
          md="4"
        >
          <h4>Order ID:{{ order.OrderId }}</h4>
          <h4>UserID: {{ order.UserId }}</h4>
          <h4>Order Status: {{ order.status }}</h4>
          <VBtn
            v-if="order.status === 'Completed'"
            @click="reviewHandler(order.OrderId, order.ProductName)"
            >Review</VBtn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          OrderId: 1,
          UserId: 1,
          status: "Completed",
        },
        {
          OrderId: 2,
          UserId: 1,
          status: "Processing",
        },
        {
          OrderId: 3,
          UserId: 1,
          status: "Packed",
        },
        {
          OrderId: 4,
          UserId: 1,
          status: "Packed",
        },
      ],
    };
  },
  methods: {
    reviewHandler(id, name) {
      this.$router.push({
        name: "ReviewComponent",
        params: { order_id: id, productName: name },
      });
    },
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
