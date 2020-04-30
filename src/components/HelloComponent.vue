<template>
  <div>
    <v-row>
      <v-col class="white--text">
        <p class="mb-1" ref="result">
          $ ocamlc -o main *.ml<br>
          $ main
        </p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-sheet elevation="3" min-height="150">
          <v-container class="codes d-flex flex-column pt-4">
            <v-row>
              <v-col cols="12">
                <p ref="codes" />
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <p class="mb-1 grey--text text-right">OCaml</p>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TypeIt from 'typeit';

export default {
  methods: {
    getTab(size) {
      return `<span style="margin-left: ${size * 22}px"> </span>`;
    },
  },
  mounted() {
    const { codes } = this.$refs;
    const { result } = this.$refs;

    // eslint-disable-next-line no-new
    new TypeIt(codes, {
      speed: 50,
      startDelay: 1400,
    })
      .type('let msgs = [];;', { delay: 300 })
      .move(-3, { speed: 30, delay: 500 })
      .type('"Hello, students"; "Welcome to the OOPSLA laboratory"', { dealy: 800 })
      .move('END', { dealy: 1000 })
      .break({ delay: 300 })
      .break({ delay: 300 })
      .type('let rec welcome l =', { delay: 500 })
      .break()
      .type(this.getTab(1), { delay: 100 })
      .type('match l with', { delay: 500 })
      .break()
      .type(this.getTab(2), { delay: 350 })
      .type('| [] -> 0', { delay: 100 })
      .break()
      .type(this.getTab(2))
      .type('| head::tail ->', { delay: 200 })
      .break()
      .type(this.getTab(3), { delay: 100 })
      .type('print_endline head;')
      .break()
      .type(this.getTab(3), { delay: 100 })
      .type('welcome(tail);;')
      .break({ delay: 1200 })
      .move(-3, { delay: 100 })
      .delete(1, { delay: 300 })
      .move(-4, { delay: 100 })
      .delete(1, { delay: 200 })
      .type(' ', { delay: 600 })
      .move('END')
      .break()
      .type('welcome msgs', { delay: 1000 })
      .exec(async () => {
        result.innerHTML = '$ ocamlc -o main *.ml<br>$ main<br>executing...';
        await new Promise((res) => setTimeout(res, 1400));
        result.innerHTML = '$ ocamlc -o main *.ml<br>$ main<br>Hello, students<br>Welcome to the OOPSLA laboratory';
      })
      .go();
  },
};
</script>

<style lang="scss" scoped>
.codes {
  font-size: 13px;
}
</style>
