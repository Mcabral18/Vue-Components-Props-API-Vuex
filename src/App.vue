<template>
  <section>
    <nav-bar />
    <rockets />
  </section>
</template>

<script>
import NavBar from "./components/NavBar";
import Rockets from "./views/Rockets.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Rockets,
  },
};
</script>

<style>
</style>
