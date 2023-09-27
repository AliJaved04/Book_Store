<template>
  <div class="container">
    <div class="main">
      <v-card>
        <v-card-title>Name</v-card-title>
        <v-card-text>{{ userData.name }}</v-card-text>
      </v-card>

      <v-card>
        <v-card-title>Email</v-card-title>
        <v-card-text>{{ userData.email }}</v-card-text>
      </v-card>

      <v-card>
        <v-card-title>Password</v-card-title>
        <v-card-text>{{ userData.password }}</v-card-text>
      </v-card>

      <VBtn @click="editUserData">Edit</VBtn>
    </div>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>Edit User Data</v-card-title>
        <v-card-text>
          <v-text-field
            label="Name"
            v-model="editedUserData.name"
          ></v-text-field>
          <v-text-field
            label="Email"
            v-model="editedUserData.email"
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="editedUserData.password"
            type="password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveUserData">Save</v-btn>
          <v-btn @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        name: "Ali javed",
        password: "1234556",
        email: "alijmalik@gmail.com",
      },
      editedUserData: {
        name: "",
        email: "",
        password: "",
      },
      dialog: false,
    };
  },
  methods: {
    editUserData() {
      this.editedUserData = { ...this.userData };
      this.dialog = true;
    },
    saveUserData() {
      this.userData = { ...this.editedUserData };
      this.dialog = false;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  gap: 50px;
  min-width: 500px;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}
</style>
