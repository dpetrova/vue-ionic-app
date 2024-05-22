<template>
  <BaseLayout
    :page-title="memory ? memory.title : 'Loading...'"
    default-back-link="/memories"
  >
    <h2 v-if="memory">Details page</h2>
    <h2 v-else>No such memory exists!</h2>
  </BaseLayout>
</template>

<script>
export default {
  data() {
    return {
      memoryId: this.$route.params.id, // params are always strings
    };
  },
  computed: {
    memory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },
  // watch: {
  //   $route(currentRoute) {
  //     this.memoryId = currentRoute.params.id;
  //   },
  // },
};
</script>

<style scoped></style>
