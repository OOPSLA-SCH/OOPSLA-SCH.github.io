<template>
  <v-row>
    <v-col v-for="({ preface, title }, ind) in contents" :key="ind" cols="12">
      <v-sheet tile color="grey lighten-4">
        <v-container class="article px-4 py-6" :class="target"
          @click="goto(title)">
          <p v-if="target === 'news'" class="mb-0" v-text="preface" />
          <p v-else-if="target === 'research'" class="research mb-0"
            v-text="preface.join(', ')" />

          <p class="mb-0" v-text="title" />
        </v-container>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import urlSlug from 'url-slug';

export default {
  props: {
    target: {
      type: String,
      required: true,
    },
  },
  computed: {
    contents() {
      return this.$store.state.data[this.target];
    },
  },
  methods: {
    goto(title) {
      const name = `${this.target[0].toUpperCase()}${this.target.slice(1).toLowerCase()}Contents`;

      this.$router.push({
        name,
        params: {
          title: urlSlug(title),
          target: this.target,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  cursor: pointer;

  & > p:nth-child(1) {
    font-size: 14px;
  }

  &.news > p:nth-child(1) {
    letter-spacing: 5px;
  }
}
</style>
