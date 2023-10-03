<template>
  <VNavigationDrawer expand-on-hover rail>
    <VList density="compact" nav>
      <VListItem
        prepend-icon="mdi-account-group"
        value="Manage Profile"
        title="Manage Profile"
        @click="manageProfile"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="My Orders"
        title="My Orders"
        @click="myOrders"
      />
      <VListItem
        prepend-icon="mdi-account-group"
        value="Track Order"
        title="Track Order"
        @click="trackOrder"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script>
export default {
  methods: {
    manageProfile() {
      this.$router.push("/HomeComponent/userdashboard/userprofile");
    },
    trackOrder() {
      this.$router.push("/userdashboard/trackorder");
    },
    myOrders() {
      this.$router.push("/userdashboard/myorders");
    },
  },
};
</script>
