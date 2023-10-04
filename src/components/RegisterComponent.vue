<template>
  <div class="body">
    <div class="main">
      <div class="logo">
        <img src="img.png" alt="" />
      </div>
      <div class="form">
        <v-form class="signup-form" fast-fail @submit.prevent>
          <v-text-field
            outlined
            dense
            color="blue"
            bg-color="white"
            class="mt-10"
            label="Username"
            v-model="signUpData.username"
            :rules="usernameRules"
          ></v-text-field>
          <v-text-field
            v-model="signUpData.email"
            outlined
            dense
            color="blue"
            bg-color="white"
            :rules="emailRules"
            label="Email"
            class="mt-4"
          ></v-text-field>
          <v-text-field
            v-model="signUpData.password"
            outlined
            dense
            color="blue"
            bg-color="white"
            autocomplete
            class="mt-4"
            :rules="passwordRules"
            label="Password"
            ref="myPass"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          >
          </v-text-field>
          <v-text-field
            v-model="signUpData.confirmPassword"
            outlined
            dense
            color="blue"
            bg-color="white"
            class="mt-4"
            autocomplete
            :rules="confirmPasswordRules"
            label="Confirm Password"
            :type="showConfirmPassword ? 'text' : 'password'"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showConfirmPassword = !showConfirmPassword"
          >
          </v-text-field>
          <v-btn
            type="submit"
            @click="submitHandler"
            block
            class="mt-2 btn-custom"
            >Submit</v-btn
          >
          <div
            style="
              display: flex;
              align-items: center;
              margin-top: 30px;
              gap: 30px;
            "
          >
            <h4>Already Have an Account?</h4>
            <router-link to="/login"><v-btn>Login</v-btn></router-link>
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
  padding: 50px;
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

  .logo {
    margin-top: 140px;
  }
  .form {
    width: 300px;
  }
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("user_module", ["getToken"]),
  },

  data() {
    return {
      signUpData: {
        username: "",
        password: "",
        email: "",
      },
      showPassword: false,
      showConfirmPassword: false,

      usernameRules: [
        (value) => {
          if (value?.length > 3) return true;

          return "Username must be at least 3 characters";
        },
      ],
      confirmPasswordRules: [
        (value) => {
          if (value === this.signUpData.password) return true;

          return "Password and confirm password are not same";
        },
      ],

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
    };
  },

  methods: {
    toLogin() {
      this.$router.push("/login");
    },

    ...mapActions("user_module", ["registerUser"]),

    submitHandler() {
      if (
        !this.signUpData.email ||
        !this.signUpData.password ||
        !this.signUpData.username
      ) {
        console.log("Cannot Send");
      } else {
        this.registerUser(this.signUpData);
      }
    },
  },
};
</script>
