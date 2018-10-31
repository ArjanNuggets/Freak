<template>
  <v-toolbar color='grey darken-4' dark>

    <v-toolbar-side-icon></v-toolbar-side-icon>

    <router-link to='/'>
      <v-toolbar-title class='white--text'>Le meilleur site de jeu, si tu donnes le numero de carte, le cryptograme et la date d'expiration de la carte de ta maman</v-toolbar-title>
    </router-link>

    <v-spacer></v-spacer>
    <template>
  <div class="text-xs-center">
    <v-badge left>
      <span slot="badge">1</span>
      <v-icon
        large
        color="red"
      >
        favorite
      </v-icon>
    </v-badge>
  </div>
</template>
    <div class="hidden-sm-and-down">

      <router-link to='/about'>
      <v-btn flat>About</v-btn>
      </router-link>


      <router-link to='/contact'>
        <v-btn flat>Contact</v-btn>
      </router-link>


      <router-link to='/login'>
        <v-btn flat>Login</v-btn>
      </router-link>

    </div>
  </v-toolbar>
</template>

<script>
  import AppMenu from './AppMenu'
  export default {
    components:{AppMenu}
  }

</script>
