<template>
  <section class="row">
    <rocket v-for="rocket in rockets" :key="rocket" :rockets="rockets" />
  </section>
</template>

<script>
import Rocket from "../components/Rocket";
export default {
  props: ["rockets"],
  components: {
    Rocket,
  },
};
</script>
<style>
.card {
  margin: 2rem 0;
}
</style>