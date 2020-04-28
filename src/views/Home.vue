<template>
  <v-container class="home">
    <!-- hello! -->
    <hello-component />

    <!-- contents -->

    <h1 class="clickable d-inline-block mt-8 mb-2" @click="goto('news')">NEWS</h1>
    <contents-component target="news" />

    <h1 class="clickable d-inline-block mt-8 mb-2" @click="goto('research')">RESEARCH</h1>
    <contents-component target="research" class="mb-12" />
  </v-container>
</template>

<script>
import HelloComponent from '@/components/HelloComponent.vue';
import ContentsComponent from '@/components/ContentsComponent.vue';

export default {
  name: 'Home',
  components: {
    HelloComponent,
    ContentsComponent,
  },
  methods: {
    goto(target) {
      this.$router.push(target);
    },
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
