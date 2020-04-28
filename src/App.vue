<template>
  <v-app :style="backgroundStyle">
    <header-component class="px-0 px-sm-2" :class="{ 'home': $route.name === 'Home' }" />

    <v-content class="px-0 px-sm-2">
      <router-view />
    </v-content>

    <footer-component class="px-0 px-sm-2" />
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import DotGridImg from '@/assets/img/dot-grid.png';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  computed: {
    backgroundStyle() {
      return {
        'background-image': `url(${DotGridImg})`,
      };
    },
  },
};
</script>

<style lang="scss">
/* global */

// variables
:root {
  // size
  --max-width: 960px; // sm

  --home-header-height: 310px;
}
</style>

<style lang="scss">
/* global */

// font: D2Coding
@font-face {
  font-family: 'D2Coding';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_three@1.0/D2Coding.woff') format('woff');
  font-weight: lighter;
  font-style: normal;
}

// assign font
* {
  font-family: 'D2Coding' !important;
  color: var(--black);
  font-weight: lighter !important;
}

// clickable element
*.clickable, a {
  text-decoration: underline;
  cursor: pointer;
  color: var(--black);
}
</style>
