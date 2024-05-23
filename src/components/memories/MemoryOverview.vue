<template>
  <IonImg :src="image" :alt="title"></IonImg>
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>

<script>
import { IonImg } from '@ionic/vue';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  components: {
    IonImg,
  },
};
</script>

<style scoped></style>
