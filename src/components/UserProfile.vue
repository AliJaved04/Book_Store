<template>
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail @submit.prevent>
      <v-text-field
        readonly
        v-model="profile.id"
        label="User ID"
      ></v-text-field>

      <v-text-field readonly v-model="profile.name" label="Name"></v-text-field>
      <v-text-field
        readonly
        v-model="profile.email"
        label="Email"
      ></v-text-field>
      <v-btn @click="editUserData" class="mt-2">Edit</v-btn>
    </v-form>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title>Edit User Data</v-card-title>
        <v-card-text>
          <v-text-field label="Name" v-model="userData.name"></v-text-field>
          <v-text-field label="Email" v-model="userData.email"></v-text-field>
          <v-text-field
            label="Password"
            autocomplete
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="userData.password"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="saveUserData">Save</v-btn>
          <v-btn @click="closeDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-sheet>
  <v-snackbar v-model="snackbar">
    Profile Updated Successfully
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
  <v-snackbar v-model="errorBar">
    Cannot update profile you might be doing something wrong
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="errorBar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      profile: {},
      userData: {
        name: "",
        password: "",
        email: "",
      },
      snackbar: false,
      errorBar: false,
      dialog: false,
      showPassword: false,
    };
  },

  methods: {
    ...mapActions("user_module", ["updateUserProfile"]),
    ...mapActions("user_module", ["deleteUser"]),
    ...mapActions("user_module", ["userProfile"]),
    editUserData() {
      this.dialog = true;
    },

    async saveUserData() {
      try {
        const res = await this.updateUserProfile(this.userData);
        if (res.message === "User updated successfully") {
          this.snackbar = true;
        }
      } catch (error) {
        this.errorBar = true;
      }

      this.dialog = false;
    },
    closeDialog() {
      this.dialog = false;
    },
  },

  async beforeMount() {
    const res = await this.userProfile(localStorage.getItem("access_token"));
    this.profile = res;
    this.userData = res;
  },
};
</script>

<style>
.v-overlay--active .v-overlay__scrim {
  display: none;
}
/* style the overlay container as required */
.v-overlay--active {
  backdrop-filter: blur(2px);
  background: rgb(0 0 0 / 0.8);
}
/* if you have an auto dark theme
   for prefers-color-scheme: dark
   I find the 0.8 too dark
*/
@media (prefers-color-scheme: dark) {
  .v-overlay--active {
    background: rgb(0 0 0 / 0.4);
  }
}
</style>
