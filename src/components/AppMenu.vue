<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <v-btn color="grey darken-4" dark slot="activator">Jeux</v-btn>
      <v-list>
        <v-list-tile @click="">
          <v-list-tile-title>Red Dead Redemption II</v-list-tile-title>
          <v-list-tile-title>Sims</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
  export default {
    
  }
</script>
