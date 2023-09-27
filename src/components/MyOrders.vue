<template>
  <div>
    <div v-for="order in orderList" :key="order.OrderId">
      <div class="card">
        <h4>{{ order.ProductName }}</h4>
        <h4>{{ order.OrderId }}</h4>
        <h4>{{ order.Quantity }}</h4>
        <h4>{{ order.status }}</h4>
        <VBtn
          v-if="order.status === 'Completed'"
          @click="reviewHandler(order.OrderId, order.ProductName)"
          >Review</VBtn
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          OrderId: 1,
          ProductName: "Product01",
          Quantity: 5,
          status: "Completed",
        },
        {
          OrderId: 2,
          ProductName: "Product02",
          Quantity: 5,
          status: "Shipped",
        },
        {
          OrderId: 3,
          ProductName: "Product01",
          Quantity: 5,
          status: "To be Shipped",
        },
        {
          OrderId: 1,
          ProductName: "Product01",
          Quantity: 5,
          status: "Completed",
        },
        {
          OrderId: 1,
          ProductName: "Product01",
          Quantity: 5,
          status: "Shipped",
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
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  width: 300px;
}
</style>
