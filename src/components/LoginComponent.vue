<template>
  <div class="body">
    <div class="main">
      <div class="logo">
        <img src="img.png" alt="" />
      </div>
      <div class="form">
        <v-form fast-fail @submit.prevent>
          <v-text-field
            v-model="email"
            outlined
            dense
            color="blue"
            bg-color="white"
            :rules="emailRules"
            label="Email"
            class="mt-4 custom-input"
          ></v-text-field>
          <v-text-field
            v-model="password"
            outlined
            dense
            color="blue"
            bg-color="white"
            class="mt-4 custom-input"
            autocomplete="on"
            :rules="passwordRules"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>

          <v-btn
            type="submit"
            @click="submitHandlerFetch"
            block
            class="mt-2 btn-custom"
            >Login</v-btn
          >
          <div
            style="
              display: flex;
              align-items: center;
              margin-top: 30px;
              gap: 30px;
            "
          >
            <h4>Dont Have an Account?</h4>
            <router-link to="/register"><v-btn>Register</v-btn></router-link>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px black;
}

.body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  width: 400px;
}

@media screen and (max-width: 400px) {
  .main {
    flex-direction: column;
    align-items: center;
    max-width: 390px;
    justify-content: center;
    border-radius: 0px;
  }

  .body {
    max-width: 390px;
    height: 50vh;
  }

  .form {
    width: 300px;
  }
}
</style>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    password: "",
    email: "",
    showPassword: false,
    iconColor: "black",
    passwordRules: [
      (value) => {
        if (value?.length >= 8) return true;

        return "Password must be at least 8 characters";
      },
    ],

    emailRules: [
      (value) => {
        if (/^[a-z0-9.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

        return "Must be a valid e-mail.";
      },
    ],
  }),

  methods: {
    ...mapActions("user_module", ["loginUser"]),

    toSignUp() {
      this.$router.push("/register");
    },
    async submitHandlerFetch() {
      if (!this.email || !this.password) {
        console.log("Fill all the fields");
      } else {
        const res = await this.loginUser({
          email: this.email,
          password: this.password,
        });
        if (res.message === "Login successful") {
          localStorage.setItem("access_token", res.access_token);
          this.$router.push("/");
        }
      }
    },
  },
};
</script>
