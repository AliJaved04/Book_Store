<template>
  <v-form style="margin-top: 30px" @submit.prevent="submitForm">
    <v-text-field
      v-model="formData.title"
      label="Title"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.author"
      label="Author"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.cover_image_url"
      label="Image URL"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.price"
      label="Price"
      required
    ></v-text-field>

    <v-text-field
      v-model="formData.description"
      label="Description"
      required
    ></v-text-field>

    <div style="display: flex; justify-content: center; margin: 30px">
      <v-btn type="submit" color="primary">Submit</v-btn>
    </div>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      formData: {
        title: "",
        author: "",
        cover_image_url: "",
        price: "",
        description: "",
      },
    };
  },

  methods: {
    ...mapActions("book", ["addBook"]),

    async submitForm() {
      const res = await this.addBook(this.formData);
      if (res.message === "Book added to catalog") {
        console.log("Added Successfully");
      }
    },
  },
};
</script>
