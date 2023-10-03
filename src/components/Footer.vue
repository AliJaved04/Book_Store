<template>
  <footer>
    <div class="newsletter">
      <label style="color: #fff">Newsletter Subscription</label>
      <v-text-field label="Email" />
      <v-btn @click="subscribeHandler" class="subscribe">Subscribe</v-btn>
    </div>

    <div class="footer-buttons">
      <router-link to="/" class="navlink">Home</router-link>
      <router-link to="/allproducts" class="navlink">All Products</router-link>

      <router-link to="/CartPage" class="navlink">
        <v-icon class="iconLarge">mdi-cart</v-icon>
      </router-link>

      <router-link to="/userProfile" class="navlink">User Profile</router-link>
      <router-link to="/myorders" class="navlink">My Orders</router-link>
    </div>
  </footer>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("user_module", ["subscribe"]),
    async subscribeHandler() {
      const res = await this.subscribe(localStorage.getItem("access_token"));
      if ("error" in res) {
        console.log("Already Taken");
      }
      if ("Successful" in res) {
        console.log("Done");
      }
    },
  },
};
</script>

<style>
footer {
  background-color: #333;
  color: #fff;
  min-height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
}

.navlink {
  text-decoration: none;
  color: #fff !important;
  margin-right: 20px;
}

.newsletter {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  gap: 30px;
}

.subscribe {
  padding: 10px 20px;
  background-color: #499b73;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
</style>
