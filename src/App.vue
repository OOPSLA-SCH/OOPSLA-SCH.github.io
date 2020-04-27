<template>
  <v-app>
    <header-component class="home px-0 px-sm-2" />

    <v-content class="px-0 px-sm-2">
      <router-view />
    </v-content>

    <footer-component class="px-0 px-sm-2" />
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
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
  --header-height: 200px;
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
