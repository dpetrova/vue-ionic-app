<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <IonList>
      <IonItem>
        <IonLabel position="floating">Title</IonLabel>
        <IonInput v-model="title" type="text" required />
      </IonItem>
      <IonItem>
        <!-- <IonLabel position="floating">Image URL</IonLabel>
        <IonInput v-model="takenImageUrl" type="url" required /> -->
        <IonThumbnail slot="start">
          <img :src="takenImageUrl" />
        </IonThumbnail>
        <IonButton type="button" fill="clear">
          <IonIcon slot="start" :icon="camera"></IonIcon>
          Take Photo
        </IonButton>
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
  IonThumbnail,
  IonIcon,
} from '@ionic/vue';
import { camera } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export default {
  emits: ['save-memory'],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonThumbnail,
    IonIcon,
  },
  data() {
    return {
      camera,
      title: '',
      description: '',
      takenImageUrl: '',
    };
  },
  methods: {
    async takePhoto() {
      const image = await Camera.getPhoto({
        quality: 60, // 0 - 100
        allowEditing: true,
        resultType: CameraResultType.Uri, // url where photo will be stored in the temporary location on the device
        source: CameraSource.Camera, // open Camera app to take a phot (also Photos is possible where choose from existing photos)
      });

      // image.webPath will contain a path that can be set as an image src.
      // You can access the original file using image.path, which can be
      // passed to the Filesystem API to read the raw data of the image,
      // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
      var imageUrl = image.webPath;

      // Can be set to the src of an image now
      this.takenImageUrl = imageUrl;
    },
    submitForm() {
      this.$emit('save-memory', {
        title: this.title,
        description: this.description,
        image: this.takenImageUrl,
      });
    },
  },
};
</script>

<style scoped></style>
