<template>
  <v-row>
    <v-col v-for="({ title: [title, subtitle], link }, ind) in lecture" :key="ind"
      cols="12">
      <v-sheet tile color="grey lighten-4">
        <v-container class="article px-4 py-6" @click="goto(link)">
          <p class="mb-0" v-text="title" />
          <p v-if="subtitle !== undefined" class="subtitle mb-0 grey--text" v-text="subtitle" />
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    lecture() {
      return this.$store.state.data.lecture;
    },
  },
  methods: {
    goto(link) {
      // window.open(`${window.location.origin}/lecture/${link}`, '_blank');
      window.location.href = `${window.location.origin}/lecture/${link}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  cursor: pointer;

  p {
    font-size: 16px;
    letter-spacing: 2px;

    &.subtitle {
      font-size: 14px;
    }
  }
}
</style>
