<template>
  <v-col cols="12" md="6">
    <v-img class="img mb-n6 mx-auto white"
      :src="resolveSrc(thumbnail)"
      aspect-ratio="1" width="135" height="135" />
    <v-sheet tile color="grey lighten-4">
      <v-container class="pt-8">
        <p v-text="position" />

        <p v-if="isDetail" class="name">
          <span class="clickable" v-text="name" @click="goto(name)" />
        </p>

        <p v-else class="name" v-text="name" />

        <p class="text-right primary--text text--lighten-1">
          <span class="clickable" v-text="email" @click="mailTo(email)" />
        </p>
      </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
import urlSlug from 'url-slug';

export default {
  props: {
    position: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    isDetail: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    resolveSrc(src) {
      return `${window.location.origin}/img/thumbnail/${src}`;
    },
    goto(name) {
      this.$router.push({
        name: 'PeopleInfo',
        params: { name: urlSlug(name) },
      });
    },
    mailTo(email) {
      window.location.href = `mailto:${email}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.img {
  border-radius: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
}

p {
  margin-bottom: 0;
  font-size: 14px;
  letter-spacing: 2px;

  &.name {
    font-size: 22px;
  }
}
</style>
