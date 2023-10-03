<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>

      <v-toolbar-title class="logo">My Book Store</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="navContent">
        <router-link to="/"><v-btn>Home</v-btn></router-link>
        <router-link to="/allproducts"><v-btn>All Products</v-btn></router-link>

        <router-link to="/CartPage">
          <v-btn>
            <v-icon class="iconLarge">mdi-cart</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/userprofile"><v-btn>User Profile</v-btn></router-link>
        <router-link to="/myorders"><v-btn>My Orders</v-btn></router-link>
        <v-btn @click="logoutHandler">Logout</v-btn>
      </div>
    </v-app-bar>
    <div v-if="showNavContent" class="menu">
      <div class="vertical-menu">
        <router-link to="/">
          <v-btn @click="toggleMenu">Home</v-btn></router-link
        >
        <router-link to="/allproducts">
          <v-btn @click="toggleMenu">All Products</v-btn></router-link
        >

        <router-link to="/CartPage">
          <v-btn @click="toggleMenu">
            <v-icon class="iconLarge">mdi-cart</v-icon>
          </v-btn>
        </router-link>

        <router-link to="/userProfile"
          ><v-btn @click="toggleMenu">User Profile</v-btn></router-link
        >
        <router-link to="/myorders"
          ><v-btn @click="toggleMenu">My Orders</v-btn></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      showNavContent: false,
    };
  },

  methods: {
    ...mapActions("user_module", ["logout"]),
    toggleMenu() {
      this.showNavContent = !this.showNavContent;
    },
    async logoutHandler() {
      const res = await this.logout(localStorage.getItem("access_token"));
      if (res.data.message === "Logout Successfull") {
        localStorage.removeItem("access_token");
        console.log("Logout Done");
      }
    },
  },
};
</script>

<style>
.vertical-menu v-btn {
  text-align: left;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid black;
  cursor: pointer;
}

/* Style for the icons */
.vertical-menu v-icon {
  margin-right: 10px;
}
.vertical-menu v-btn:hover {
  background-color: #ddd;
}

.vertical-menu {
  position: fixed;
  z-index: 9999;
  display: flex;
  max-width: 200px;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  margin-left: 20px;
  margin-top: 30px;
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); /* Add a box shadow */
}
.menu {
  display: none;
}

.navContent {
  display: flex;
  align-items: center;
  gap: 40px;
}

.router-link-active {
  text-decoration: none;
}
.iconLarge {
  font-size: 24px;
}

@media screen and (max-width: 480px) {
  .menu {
    display: block;
  }

  .navContent {
    display: none;
  }
}
</style>
