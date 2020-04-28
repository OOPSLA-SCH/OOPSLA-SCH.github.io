<template>
  <v-container class="contents">
    <template v-if="target === 'research'">
      <p><a :href="contents.link" target="_blank">RESEARCH LINK</a></p>
    </template>

    <p class="my-6" v-html="linebreakParser(contents.contents)" />
  </v-container>
</template>

<script>
import Vue from 'vue';
import urlSlug from 'url-slug';

export default {
  name: 'Contents',
  data: () => ({
    title: '',
  }),
  props: {
    target: {
      type: String,
      required: true,
    },
  },
  computed: {
    contents() {
      const contentsTitle = this.$route.params.title;
      return this.$store.state.data[this.target]
        .find(({ title }) => urlSlug(title) === contentsTitle);
    },
  },
  methods: {
    linebreakParser(contents) {
      return contents.replace(/\n/g, '<br>');
    },
  },
  mounted() {
    Vue.nextTick(() => {
      document.querySelectorAll('p > img').forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.style = 'max-width: 100%; background-color: #ffffff;';
        el.addEventListener('click', () => window.open(el.src, '_blank'));
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.contents {
  max-width: var(--max-width);

  p {
    letter-spacing: 2px;
    line-height: 32px;
    word-break: keep-all;
  }
}
</style>
