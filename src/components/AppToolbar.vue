<template>
  <v-toolbar color='grey darken-4' dark>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Freak</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">

      <v-btn flat>About</v-btn>

      <v-btn flat>Contact</v-btn>

      <router-link to='/login'>
        <v-btn flat>Login</v-btn>
      </router-link>

    </div>
  </v-toolbar>
</template>
