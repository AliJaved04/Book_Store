<template>
  <div>
    <div class="card">
      <h4>{{ productName }}</h4>
      <h4>{{ orderID }}</h4>
    </div>

    <v-card>
      <v-card-title>
        Customer Review
        <v-rating
          v-model="rating"
          :half-increments="true"
          color="amber"
        ></v-rating>
      </v-card-title>

      <v-card-text>
        <v-text-field
          v-model="reviewText"
          label="Review"
          multi-line
          rows="5"
          counter
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="submitReview">Submit</v-btn>
        <v-btn color="error" @click="cancelReview">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderID: "",
      productName: "",
      rating: 0,
      reviewText: "",
    };
  },
  beforeMount() {
    this.orderID = this.$route.params.order_id;
    this.productName = this.$route.params.productName;
  },

  methods: {
    submitReview() {
      console.log(this.reviewText, this.rating);
    },
    cancelReview() {
      this.rating = 0;
      this.reviewText = "";
    },
  },
};
</script>
