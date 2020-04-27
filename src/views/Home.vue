<template>
  <v-container class="home">
    <!-- hello! -->
    <hello-component />

    <!-- news -->

    <h1 class="clickable d-inline-block mt-8 mb-2">NEWS</h1>
    <contents-component target="news" />

    <h1 class="clickable d-inline-block mt-8 mb-2">RESEARCH</h1>
    <contents-component target="research" />
  </v-container>
</template>

<script>
import HelloComponent from '@/components/HelloComponent.vue';
import ContentsComponent from '@/components/ContentsComponent.vue';

export default {
  name: 'Home',
  data: () => ({
  }),
  components: {
    HelloComponent,
    ContentsComponent,
  },
};
</script>

<style lang="scss" scoped>
.home {
  margin-top: -240px;
  max-width: var(--max-width);

  h1 {
    font-size: 16px;
  }
}
</style>
