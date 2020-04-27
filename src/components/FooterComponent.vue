<template>
  <footer class="grey darken-4">
    <v-container class="footer-contents white--text">
      <!-- background paths -->
      <div class="paths">
        <div />
        <div />
      </div>

      <!-- infos -->
      <v-row>
        <v-col class="pb-0">
          <h1 class="d-inline-block px-2 deep-purple" v-text="title" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="mb-0" v-text="address" />
          <p class="mb-0" v-text="office" />
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  data: () => ({
    title: '',
    address: '',
    office: '',
  }),
  mounted() {
    const { info } = this.$store.state.data;

    this.title = info.title;
    this.address = info.address;
    this.office = info.office;
  },
};
</script>

<style lang="scss" scoped>
footer {
  overflow: hidden;

  .footer-contents {
    max-width: var(--max-width);

    h1 {
      letter-spacing: 4px;
      font-size: 24px;
    }

    p {
      font-size: 13px;
    }

    div.paths {
      position: relative;

      div {
        position: absolute;
        border-width: 17px;
        border-style: solid;
        border-radius: 100px;

        &:nth-child(1) {
          width: 274px;
          top: 129px;
          right: -155px;
          border-color: #ffeb3b;
        }

        &:nth-child(2) {
          width: 174px;
          top: 3px;
          left: -155px;
          border-color: #03A9F4;
        }
      }
    }

    div.row {
      position: relative;
    }
  }
}
</style>
