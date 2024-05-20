<template>
  <BaseLayout page-title="All Memories">
    <IonList>
      <IonItem router-link="/memories/1">First</IonItem>
      <IonItem router-link="/memories/2">Second</IonItem>
      <IonItem router-link="/memories/3">Third</IonItem>
    </IonList>
  </BaseLayout>
</template>

<script>
import { IonList, IonItem } from '@ionic/vue';

export default {
  components: {
    IonList,
    IonItem,
  },
};
</script>

<style scoped></style>
