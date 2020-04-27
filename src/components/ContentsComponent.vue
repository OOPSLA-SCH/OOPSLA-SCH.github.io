<template>
  <div>
    <v-row>
      <v-col v-for="({ preface, title }, ind) in contents" :key="ind" cols="12">
        <v-sheet tile color="grey lighten-4">
          <v-container class="article px-4 py-6" :class="target">
            <p v-if="target === 'news'" class="mb-0" v-text="preface" />
            <p v-else-if="target === 'research'" class="research mb-0"
              v-text="preface.join(', ')" />

            <p class="mb-0" v-text="title" />
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    contents: [],
  }),
  props: {
    target: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.contents = this.$store.state.data[this.target];
  },
};
</script>

<style lang="scss" scoped>
.article {
  & > p:nth-child(1) {
    font-size: 14px;
  }

  &.news > p:nth-child(1) {
    letter-spacing: 5px;
  }
}
</style>
