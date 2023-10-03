<template>
  <v-container fluid>
    <v-row dense>
      <v-col :cols="2">
        <v-icon style="margin-top: 70px">mdi-close</v-icon>
      </v-col>
      <v-col :cols="6">
        <v-img :src="book.src" height="150px" width="150px" cover> </v-img>
      </v-col>
      <v-col :cols="4">
        <h1 class="text-h6">Price: ${{ book.price }}</h1>
        <input
          class="quan"
          v-model="book.quantity"
          outlined
          type="number"
          style="max-width: 140px"
          min="1"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    book: {},
  },
};
</script>

<style scoped>
.quan {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
  margin-top: 10px;
}
</style>
