<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <IonList>
      <IonItem>
        <IonLabel position="floating">Title</IonLabel>
        <IonInput v-model="title" type="text" required />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Image URL</IonLabel>
        <IonInput v-model="image" type="url" required />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Description</IonLabel>
        <IonTextarea v-model="description" rows="5" />
      </IonItem>
    </IonList>
    <IonButton type="submit" expand="block" fill="outline">Save</IonButton>
  </form>
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
  emits: ['save-memory'],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  data() {
    return {
      title: '',
      description: '',
      image: '',
    };
  },
  methods: {
    submitForm() {
      this.$emit('save-memory', {
        title: this.title,
        description: this.description,
        image: this.image,
      });
    },
  },
};
</script>

<style scoped></style>
