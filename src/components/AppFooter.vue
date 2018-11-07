<template>
  <div>
    <v-footer
    height="auto"
    color = 'grey darken-4'
  >
    <v-layout
      justify-center
      row
      wrap
    >
      <v-btn
        color="white"
        flat
        round
      >
      Home
      </v-btn>
      <v-btn
        color="white"
        flat
        round
      >
      About us
      </v-btn>

      <v-flex
        primary
        lighten-2
        py-3
        text-xs-center
        white--text
        xs12
      >
        &copy;2018 — <strong>ArjanNuggets</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</div>
</template>

<script>
  export default {

  }
</script>
