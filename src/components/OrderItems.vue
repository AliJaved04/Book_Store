<template>
  <v-card max-width="500px">
    <v-card-title> Book ID {{ item.book_id }} </v-card-title>
    <v-card-title> Customer Review </v-card-title>

    <v-card-text>
      <v-text-field
        ref="review"
        v-model="reviewText"
        label="Review"
        multi-line
        rows="5"
        counter
      ></v-text-field>
      <v-rating
        ref="rating"
        v-model="rating"
        :half-increments="true"
        color="amber"
      ></v-rating>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="submitReview">Submit</v-btn>
      <v-btn color="error" @click="cancelReview">Cancel</v-btn>
    </v-card-actions>
    <v-snackbar v-model="reviewBar">
      Review Added Successfuly
      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="reviewBar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      orderID: "",
      productName: "",
      rating: 0,
      reviewText: "",
      reviewBar: false,
    };
  },

  props: {
    item: Object,
  },
  beforeMount() {
    console.log(this.item);
  },
  methods: {
    async submitReview() {
      const res = await axios.post(
        "http://10.0.10.211:3300/api/create/review",
        {
          user_id: localStorage.getItem("user_id"),
          book_id: this.item.book_id,
          review: this.reviewText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );

      if (res.message === "Reviews added successfully") {
        this.reviewBar = true;
      }
      const res1 = await axios.post(
        ` http://10.0.10.211:3300/api/giverating/${this.item.book_id}/${this.rating}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      if (
        res1.data.message === "Rating updated successfully" &&
        res.data.message === "Review added successfully"
      ) {
        this.reviewBar = true;
        this.$refs.review.value = "";
        this.$refs.rating.value = "";
      }
    },
    cancelReview() {
      this.rating = 0;
      this.reviewText = "";
    },
  },
};
</script>
