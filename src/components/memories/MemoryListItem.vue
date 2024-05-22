<template>
  <IonItem :router-link="`/memories/${memory.id}`">
    <IonThumbnail slot="start">
      <IonImg :src="memory.image" :alt="memory.title"></IonImg>
    </IonThumbnail>
    <IonLabel>
      {{ memory.title }}
    </IonLabel>
  </IonItem>
</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';

export default {
  props: {
    memory: {
      type: Object,
      require: true,
    },
  },
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
};
</script>

<style scoped></style>
