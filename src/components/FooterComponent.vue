<template>
  <footer class="grey darken-4" :style="backgroundStyle">
    <v-container class="footer-contents white--text">
      <!-- top button -->
      <div class="to-top">
        <span class="clickable px-2 py-1 white grey--text text--darken-4" @click="toTop">top</span>
      </div>

      <!-- background paths -->
      <div class="paths">
        <div :style="backgroundStyle" />
        <div :style="backgroundStyle" />
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
import DotGridImg from '@/assets/img/dot-grid.png';

export default {
  data: () => ({
    title: '',
    address: '',
    office: '',
  }),
  computed: {
    backgroundStyle() {
      return {
        'background-image': `url(${DotGridImg})`,
      };
    },
  },
  methods: {
    toTop() {
      window.scrollTo(0, 0);
    },
  },
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
  background-repeat: repeat;
  background-blend-mode: overlay;

  .footer-contents {
    max-width: var(--max-width);

    h1 {
      letter-spacing: 4px;
      font-size: 24px;
    }

    p {
      font-size: 13px;
    }

    div.to-top {
      position: relative;
      z-index: 100;

      & > span {
        position: absolute;
        right: 0;
        top: -12px;
        font-size: 14px;
      }
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
