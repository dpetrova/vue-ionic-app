<template>
  <BaseLayout page-title="Add a Memory" default-back-link="/memories">
    <CreateMemoryForm @save-memory="saveMemory"></CreateMemoryForm>
  </BaseLayout>
</template>

<script>
import CreateMemoryForm from '../components/memories/CreateMemoryForm.vue';

export default {
  components: {
    CreateMemoryForm,
  },
  data() {
    return {};
  },
  methods: {
    saveMemory(memoryData) {
      this.$store.dispatch('addMemory', memoryData);
      this.$router.replace('/memories');
    },
  },
};
</script>

<style scoped></style>
