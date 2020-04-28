<template>
  <v-container class="lists mt-4 mb-12">
    <!-- lecture lists -->
    <lecture-component v-if="target === 'lecture'" :key="target" />

    <!-- contents lists -->
    <contents-component v-else :target="target" :key="target" />
  </v-container>
</template>

<script>
import LectureComponent from '@/components/LectureComponent.vue';
import ContentsComponent from '@/components/ContentsComponent.vue';

export default {
  name: 'Contents',
  components: {
    LectureComponent,
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
