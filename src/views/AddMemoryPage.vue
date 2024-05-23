<template>
  <BaseLayout page-title="Add a Memory" default-back-link="/memories">
    <form class="ion-padding">
      <IonList>
        <IonItem>
          <IonLabel position="floating">Title</IonLabel>
          <IonInput type="text" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Image URL</IonLabel>
          <IonInput type="url" required />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonTextarea rows="5" />
        </IonItem>
      </IonList>
      <IonButton expand="block" fill="outline">Save</IonButton>
    </form>
  </BaseLayout>
</template>

<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from '@ionic/vue';

export default {
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
