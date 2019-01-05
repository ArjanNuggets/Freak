<template>
  <v-toolbar color='grey darken-4' dark
  :height='70'
  :scroll-threshold='600'>

    <router-link to='/'>
      <v-toolbar-title class='white--text'>Freak</v-toolbar-title>
    </router-link>



    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">


        <router-link to='/about'>
        <v-btn flat>About</v-btn>
        </router-link>


        <router-link to='/contact'>
        <v-btn flat>Contact</v-btn>
        </router-link>


      </div>



  </v-toolbar>
</template>

<script>


</script>

<style >
router-link {
  text-decoration: none;
}
</style>
