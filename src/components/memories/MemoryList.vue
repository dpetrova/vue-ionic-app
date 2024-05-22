<template>
  <IonList>
    <MemoryListItem
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    />
  </IonList>
</template>

<script>
import { IonList } from '@ionic/vue';
import MemoryListItem from './MemoryListItem.vue';

export default {
  props: {
    memories: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    IonList,
    MemoryListItem,
  },
};
</script>

<style scoped></style>
