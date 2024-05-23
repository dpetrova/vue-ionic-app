<template>
  <BaseLayout page-title="All Memories">
    <!-- named slot for action buttons -->
    <template v-slot:actions>
      <IonButton router-link="/memories/add">
        <IonIcon slot="icon-only" :icon="add"></IonIcon>
      </IonButton>
    </template>
    <!-- default slot for page content -->
    <MemoryList :memories="memories" />
  </BaseLayout>
</template>

<script>
import { IonButton, IonIcon } from '@ionic/vue';
import MemoryList from '../components/memories/MemoryList.vue';
import { add } from 'ionicons/icons';

export default {
  components: {
    IonButton,
    IonIcon,
    MemoryList,
  },
  data() {
    return {
      add,
    };
  },
  computed: {
    memories() {
      return this.$store.getters.memories;
    },
  },
};
</script>

<style scoped></style>
