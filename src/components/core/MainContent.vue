<template>
  <router-view />
</template>

<script>
export default {
  name: "MainContent",
  methods: {
    loadedOne(e) {
      console.log(e); // ImagePreloader id, loaded src, src index, loaded count, src list length, progress
      console.log(e.progress);
    },
    loadedAll(e) {
      console.log(e); // ImagePreloader id or boolean
    }
  }
};
</script>

<style scoped>
@import "./../../views/style/style.css";
@import "./../../views/style/layout.css";
</style>
