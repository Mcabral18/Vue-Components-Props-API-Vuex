<template>
  <section>
    <button
      v-on:click="showForm = !showForm"
      type="button"
      class="btn btn-danger"
    >
      Add rocket
    </button>
    <form v-if="showForm" @submit.prevent="onAddRocket">
      <div class="form-group">
        <label for="Name">Name</label>
        <input
          v-model="rocket.name"
          type="text"
          class="form-control"
          name="name"
          id="name"
          value=""
        />
      </div>
      <div class="form-group">
        <label for="discription">Description</label>
        <input
          v-model="rocket.description"
          type="text"
          class="form-control"
          name="description"
          id="description"
          value=""
        />
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input
          v-model="rocket.image"
          type="text"
          class="form-control"
          name="image"
          id="image"
          value=""
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Rocket</button>
    </form>
  </section>
</template>

<script>
function getEmptyRocket() {
  return {
    name: "",
    description: "",
    image: "",
  };
}

export default {
  data() {
    return {
      showForm: false,
      // create a function to store the data from the form so we can call it to clear the form after we submit
      rocket: getEmptyRocket(),
    };
  },
  methods: {
    onAddRocket() {
      this.$store.commit("addRocket", this.rocket);
      this.rocket = getEmptyRocket();
      this.showForm = false;
    },
  },
};
</script>

<style>
.btn {
  margin: 2rem 0;
}
</style>