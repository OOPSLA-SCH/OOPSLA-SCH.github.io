<template>
  <header class="grey darken-4">
    <v-container class="header-contents white--text">
      <!-- background paths -->
      <div class="paths">
        <div />
        <div />
        <div />
      </div>

      <v-row>
        <!-- title -->
        <v-col>
          <h1 class="clickable" v-text="title" @click="$router.push('/')" />
        </v-col>

        <v-spacer />

        <!-- menus -->
        <v-col class="d-flex justify-end">
          <v-btn v-for="([name, linkTo], ind) in menus" :key="ind"
            :to="linkTo"
            text class="d-none d-sm-inline-flex white--text" v-text="name" />

          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon class="white--text d-inline-flex d-sm-none" v-on="on">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item v-for="([name, linkTo], ind) in menus" :key="ind"
                :to="linkTo">
                <v-list-item-title v-text="name" />
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>

      <!-- subtitle -->
      <v-row :class="{ 'd-none': routeName === 'Home' }">
        <!-- lists -->
        <v-col v-if="isLists">
          <h2 class="ml-4 text-uppercase" v-text="routeName" />
        </v-col>

        <!-- contents -->
        <v-col v-else class="subtitle-contents">
          <!-- preface -->
          <h4 v-if="target === 'news'" class="news-subtitle-preface" v-text="contents.preface" />
          <h4 v-else v-text="contents.preface.join(', ')" />

          <h3 class="mt-1" v-text="contents.title" />
        </v-col>
      </v-row>
    </v-container>
  </header>
</template>

<script>
import urlSlug from 'url-slug';

export default {
  data: () => ({
    title: '',
    menus: [],
  }),
  computed: {
    routeName() {
      return this.$route.name;
    },
    isLists() {
      return (this.routeName || '').search('Contents') === -1;
    },
    target() {
      return this.routeName.split('Contents')[0].toLowerCase();
    },
    contentsTitle() {
      return this.$route.params.title;
    },
    contents() {
      const contents = this.$store.state.data[this.target]
        .find(({ title }) => urlSlug(title) === this.contentsTitle);
      return contents;
    },
  },
  mounted() {
    const { data } = this.$store.state;
    this.title = data.info.title;
    this.menus = data.menus;
  },
};
</script>

<style lang="scss" scoped>
header {
  overflow: hidden;

  &.home {
    height: var(--home-header-height);
  }

  .header-contents {
    max-width: var(--max-width);

    h1 { // title
      font-size: 28px;
      letter-spacing: 5px;
    }

    h2 { // subtitle
      font-size: 44px;
      letter-spacing: 8px;
    }

    div.paths {
      position: relative;

      div {
        position: absolute;
        border-width: 17px;
        border-style: solid;
        border-radius: 100px;

        &:nth-child(1) {
          width: 140px;
          top: 36px;
          left: 63px;
          border-color: #4caf50;
        }

        &:nth-child(2) {
          width: 244px;
          top: 138px;
          right: -43px;
          border-color: #03A9F4;
        }

        &:nth-child(3) {
          width: 218px;
          top: 256px;
          left: -43px;
          border-color: #ffeb3b;
        }
      }
    }

    div.row {
      position: relative;
    }

    div.subtitle-contents {
      h4 {
        font-size: 14px;

        &.news-subtitle-preface {
          letter-spacing: 5px;
        }
      }

      h3 {
        font-size: 20px;
      }
    }
  }
}
</style>
