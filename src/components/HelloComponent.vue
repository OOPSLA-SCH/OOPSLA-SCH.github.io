<template>
  <div>
    <v-row>
      <v-col class="white--text">
        <p class="mb-1">Hello, students</p>
        <p class="mb-1">Welcome to the OOPSLA laboratory</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-sheet elevation="3" min-height="150">
          <v-container class="codes pt-4">
            <p v-for="([indent, code], ind) in codes_1" :key="`1-${ind}`"
              class="mb-1" :class="`ml-${indent * 4}`"
              v-text="code" />
            <p class="my-4 grey--text text--lighten-1" v-text="result_1" />

            <p v-for="([indent, code], ind) in codes_2" :key="`2-${ind}`"
              class="mb-1" :class="`ml-${indent * 4}`"
              v-text="code" />
            <p class="mt-4 grey--text text--lighten-1" v-text="result_2" />

            <p class="mb-1 grey--text text-right">OCaml</p>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    codes_1: [
      [0, '# let msgs = ['],
      [1, '"Hello, students";'],
      [1, '"Welcome to the OOPSLA laboratory"'],
      [0, '] ;;'],
    ],
    result_1: 'val msgs : string list = ["Hello, students"; "Welcome to the OOPSLA laboratory"]',
    codes_2: [
      [0, '# let rec welcome_msg l ='],
      [1, 'match l with'],
      [1, '| [] -> 0'],
      [1, '| head::tail ->'],
      [2, 'print_endline head;'],
      [2, 'welcome_msg tail;;'],
    ],
    result_2: 'val welcome_msg : string list -> int = <fun>',
  }),
};
</script>

<style lang="scss" scoped>
.codes {
  p, span {
    font-size: 13px;
  }
}
</style>
