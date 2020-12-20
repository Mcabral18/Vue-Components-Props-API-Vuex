<template>
  <section>
    <new-rocket-form class="container mt-5" />
    <!-- passing array rocket to child compoent using props -->
    <rockets-list :rockets="rockets" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import NewRocketForm from "../components/NewRocketForm.vue";
import RocketsList from "../components/RocketsList.vue";
export default {
  components: {
    NewRocketForm,
    RocketsList,
  },
  computed: {
    ...mapGetters(["rockets"]),
  },
  async mounted() {
    this.$store.dispatch("getRockets");
  },
};
</script>

<style>
</style>