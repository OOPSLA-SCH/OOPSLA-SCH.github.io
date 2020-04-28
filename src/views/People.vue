<template>
  <v-container class="people">
    <h3 class="ml-sm-0 mt-6 mb-2">Professor</h3>
    <v-row>
      <people-component v-for="(p, ind) in professor" :key="`1-${ind}`"
        class="my-4"
        :name="p.name[0]" :email="p.email" :thumbnail="p.thumbnail" :position="p.position"
        :isDetail="p.detail !== undefined" />
    </v-row>

    <v-divider class="transparent my-4" />

    <h3 class="mt-6 mb-2">Students</h3>
    <v-row>
      <people-component v-for="(s, ind) in students" :key="`2-${ind}`"
        class="my-4"
        :name="s.name[0]" :email="s.email" :thumbnail="s.thumbnail" :position="s.position"
        :isDetail="s.detail !== undefined" />
    </v-row>

    <v-divider class="transparent my-4" />

    <h3 class="mt-6 mb-2">Alumni</h3>
    <v-row>
      <people-component v-for="(s, ind) in alumni" :key="`2-${ind}`"
        class="my-4"
        :name="s.name[0]" :email="s.email" :thumbnail="s.thumbnail" :position="s.position"
        :isDetail="s.detail !== undefined" />
    </v-row>

    <v-divider class="transparent my-8" />
  </v-container>
</template>

<script>
import PeopleComponent from '@/components/PeopleComponent.vue';

export default {
  name: 'People',
  components: {
    PeopleComponent,
  },
  computed: {
    professor() {
      return this.$store.state.data.people.professor;
    },
    students() {
      return this.$store.state.data.people.students;
    },
    alumni() {
      return this.$store.state.data.people.alumni;
    },
  },
};
</script>

<style lang="scss" scoped>
.people {
  max-width: var(--max-width);

  h3 {
    font-size: 16px;
    letter-spacing: 4px;
  }
}
</style>
