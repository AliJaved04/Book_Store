<template>
  <div class="container">
    <v-carousel hide-delimiters>
      <v-carousel-item src="book3.jpg" class="item" cover></v-carousel-item>

      <v-carousel-item src="book2.jpg" cover></v-carousel-item>

      <v-carousel-item src="book5.jpg" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.relative {
  display: block;
  width: 1100px;
  height: auto;
  margin-top: 30px;
  box-sizing: border-box;
  background-color: #c5eed9;
}
</style>
