<template>
  <v-container class="lists mt-4 mb-12">
    <!-- contents lists -->
    <contents-component :target="target" :key="target" />
  </v-container>
</template>

<script>
import ContentsComponent from '@/components/ContentsComponent.vue';

export default {
  name: 'Contents',
  components: {
    ContentsComponent,
  },
  props: {
    target: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.lists {
  max-width: var(--max-width);
}
</style>
