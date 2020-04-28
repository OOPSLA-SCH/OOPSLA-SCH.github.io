<template>
  <v-container class="people-info">
    <!-- thumbnail -->
    <v-row class="thumbnail-row">
      <v-col>
        <v-img class="thumbnail"
          :src="resolveSrc(contents.thumbnail)" aspect-ratio="1" width="135" height="135" />
      </v-col>
    </v-row>

    <!-- information -->
    <v-row class="mt-4 mb-8">
      <v-col class="pb-0" cols="12">
        <h2 v-text="contents.name[0]" />
        <h2 v-if="contents.name[1] !== undefined" v-text="contents.name[1]" />

        <h3 class="mt-3" v-text="contents.position" />
        <p v-text="contents.detail.office" />

        <v-divider class="mb-6 mt-8" />
      </v-col>

      <v-col class="pb-0" cols="12">
        <h3>Address</h3>
        <p v-text="contents.detail.address" />
      </v-col>

      <template v-for="(name, ind) in ['Tel', 'Fax']">
        <v-col class="pb-0" cols="2" :key="name + ind">
          <p v-text="'- ' + name" />
        </v-col>
        <v-col class="pb-0" cols="10" :key="name + ind + 'contents'">
          <p v-text="contents[name.toLowerCase()] || contents.detail[name.toLowerCase()]" />
        </v-col>
      </template>

      <v-col>
        <v-divider class="mt-6 mb-2" />
      </v-col>

      <v-col v-for="(c, name) in contents.detail.contents" :key="name" cols="12">
        <h2 class="mt-4 mb-2" v-text="name" />
        <p class="render" v-html="linebreakParser(c)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Vue from 'vue';
import urlSlug from 'url-slug';

export default {
  name: 'PeopleInfo',
  computed: {
    contents() {
      const { name: userName } = this.$route.params;
      const { people } = this.$store.state.data;

      const professor = people.professor
        .find(({ name: [name] }) => urlSlug(name) === userName);

      if (professor !== undefined) {
        return professor;
      }

      const student = people.students
        .find(({ name: [name] }) => urlSlug(name) === userName);

      return student;
    },
  },
  methods: {
    resolveSrc(src) {
      return `${window.location.origin}/img/thumbnail/${src}`;
    },
    linebreakParser(contents) {
      return contents.replace(/\n/g, '<br>');
    },
  },
  mounted() {
    Vue.nextTick(() => {
      document.querySelectorAll('p.render > img').forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.style = 'max-width: 100%; background-color; #ffffff;';
        el.addEventListener('click', () => window.open(el.src, '_blank'));
      });
    });
  },
};
</script>

<style lang="scss" scoped>
.people-info {
  position: relative;
  max-width: var(--max-width);

  h2 {
    font-size: 28px;
    letter-spacing: 2px;
  }

  h3 {
    font-size: 20px;
    letter-spacing: 1px;
  }

  p {
    margin-bottom: 0;
    font-size: 14px;
    letter-spacing: 1px;
  }

  .thumbnail-row {
    position: absolute;
    right: 10%;
    top: -90px;

    .thumbnail {
      box-shadow: 0px 3px 17px rgba(0, 0, 0, 0.48);
      border-radius: 100%;
    }
  }
}
</style>
