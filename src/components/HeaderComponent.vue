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
          <h1 class="clickable" v-text="title" />
        </v-col>

        <v-spacer />

        <!-- menus -->
        <v-col class="d-flex justify-end">
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon class="white--text" v-on="on">
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
    </v-container>
  </header>
</template>

<script>
export default {
  data: () => ({
    title: '',
    menus: [],
  }),
  mounted() {
    const { data } = this.$store.state;
    this.title = data.info.title;
    this.menus = data.menus;
  },
};
</script>

<style lang="scss" scoped>
header {
  height: var(--header-height);
  overflow-x: hidden;

  &.home {
    height: var(--home-header-height);
  }

  .header-contents {
    max-width: var(--max-width);

    h1 { // title
      font-size: 28px;
      letter-spacing: 5px;
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
  }
}
</style>
