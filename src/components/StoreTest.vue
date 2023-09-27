<template>
  <h1>Store Test</h1>
  <h1>{{ getDummyData }}</h1>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("book", ["getDummyData"]),
  },

  data() {
    return {
      bookArray: [],
    };
  },
  mounted() {
    this.fetchDummy();
  },
  methods: {
    ...mapActions("book", ["fetchDummy"]),
  },
};
</script>
