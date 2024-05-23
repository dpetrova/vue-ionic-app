<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton :default-href="defaultBackLink" />
        </IonButtons>
        <IonTitle>{{ pageTitle }}</IonTitle>
        <IonButtons slot="end">
          <slot name="actions"></slot>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <slot />
    </IonContent>
  </IonPage>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/vue';

export default {
  props: {
    pageTitle: {
      type: String,
      default: 'Memories',
    },
    defaultBackLink: {
      type: String,
      default: null,
    },
  },
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
  },
};
</script>

<style scoped></style>
