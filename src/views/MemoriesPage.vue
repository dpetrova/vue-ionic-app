<template>
  <BaseLayout page-title="All Memories">
    <MemoryList :memories="memories" />
  </BaseLayout>
</template>

<script>
import MemoryList from '../components/memories/MemoryList.vue';

export default {
  components: {
    MemoryList,
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style scoped></style>
