<template>
  <BaseLayout
    :page-title="memory ? memory.title : 'Loading...'"
    default-back-link="/memories"
  >
    <MemoryOverview
      v-if="memory"
      :title="memory.title"
      :description="memory.description"
      :image="memory.image"
    />
    <h2 v-else>No such memory exists!</h2>
  </BaseLayout>
</template>

<script>
import MemoryOverview from '../components/memories/MemoryOverview.vue';

export default {
  components: {
    MemoryOverview,
  },
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
