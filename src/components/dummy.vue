<template>
  <div>
    <v-snackbar :timeout="2000" color="success" elevation="24">
      <template v-slot:activator="{ props }">
        <v-btn color="success" class="ma-2" v-bind="props">open</v-btn>
      </template>

      Snackbar with <strong>elevation="24"</strong>.
    </v-snackbar>
  </div>
</template>
<script>
export default {
  beforeMount() {
    console.log("s");
  },
};
</script>
