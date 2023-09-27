<template>
  <v-container class="main mt-16">
    <p class="text-h3 font-weight-bold">Login Form</p>
    <v-row>
      <v-col cols="12">
        <v-form class="login-form" fast-fail @submit.prevent>
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
          <h4 class="guest-para">
            Want To Sign In As A Guest ?
            <v-btn @click="guestFunction" class="btn-custom-guest">Guest</v-btn>
          </h4>

          <v-btn
            type="submit"
            @click="submitHandlerFetch"
            block
            class="mt-2 btn-custom"
            >Submit</v-btn
          >
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h4 class="signup-para">
          Register As A New User ?
          <v-btn @click="toSignUp" class="btn-custom-guest">SignUp</v-btn>
        </h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
    guestFunction() {
      this.$router.push("/allpostsguest");
    },
    toSignUp() {
      this.$router.push("/register");
    },
    async submitHandlerFetch() {
      if (!this.email || !this.password) {
        console.log("Fill all the fields");
      } else {
        const res = await fetch("http://10.0.10.211:3300/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        if (!res.ok) {
          this.$toast.error("Incorrect Username or Password", {
            position: "top-right",
          });
        } else {
          const data = await res.json(); // Wait for the JSON promise to resolve
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("email", this.email);
          localStorage.setItem("user_id", data.user_id);
          if (this.email === "admin@gmail.com") {
            this.$router.push("/adminDashboard");
          } else {
            this.$router.push("./userDashboard");
          }
        }
      }
    },
  },
};
</script>
<style scoped>
.signup-para {
  margin: 30px;
  padding-top: 20px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-custom:hover {
  background-color: #000;
  color: white;
  padding: 25px;
  font-size: 20px;
}

.btn-custom {
  background-color: #ffffff00;
  color: black;
  padding: 25px;
  font-size: 20px;
  border: 1px solid black;
}

.btn-custom-guest {
  background-color: #000;
  color: white;
  font-size: 18px;
  margin-left: 28px;
}

.btn-custom-guest:hover {
  background-color: #000000c5;
  color: white;
  font-size: 18px;
  margin-left: 28px;
}

.login-form {
  border: 1px solid #000 !important; /* Change the border style as needed */
  padding: 30px;
  border-radius: 3px;
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
