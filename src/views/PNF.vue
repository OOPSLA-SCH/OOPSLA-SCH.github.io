<template>
  <v-container class="pnf d-flex align-center justify-center">
    <span>페이지를 찾을 수 없어요 <span>' ~ ^</span></span>
  </v-container>
</template>

<script>
export default {
  name: 'HTTP_404',
};
</script>

<style lang="scss" scoped>
.pnf {
  height: 100%;

  span {
    font-family: fantasy !important;
  }
}
</style>
