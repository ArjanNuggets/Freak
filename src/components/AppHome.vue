<template>

 <div>
   <template>

     <v-container >
       <v-layout row wrap>
         <v-flex xs12 lg5 mb-3>
           <v-expansion-panel popout dark>
             <v-expansion-panel-content >
               <div slot="header">Spiderman</div>
               <v-card>
                 <v-card-text>Synopsis : Spider-Man est un jeu d'action sur PlayStation 4. Le Tisseur est de retour pour le plaisir des joueurs qui pourront alterner phases d'exploration en voltigeant de building en building, phases d’infiltration et affrontements contre les super-vilains comme Le Caïd, Vulture, Electro, Mister Negative, etc.</v-card-text>
               </v-card>
               <router-link to='/Spiderman'>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>
             </v-expansion-panel-content>
             <v-expansion-panel-content >
               <div slot="header">Nba 2k19</div>
               <v-card>
                 <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
               </v-card>
               <router-link to='/NBA'>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>
             </v-expansion-panel-content>
             <v-expansion-panel-content >
               <div slot="header">Red Dead Redemption II</div>
               <v-card>
                 <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
               </v-card>
               <router-link to='/RDR2'>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>
             </v-expansion-panel-content>
             <v-expansion-panel-content >
               <div slot="header">Sims</div>
               <v-card>
                 <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
               </v-card>
               <router-link to='/'>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>
             </v-expansion-panel-content>
           </v-expansion-panel>
         </v-flex>
       </v-layout>
     </v-container>
   </template>


    <app-page></app-page>
  </div>

</template>

<script>
  import AppPage from './AppPage'
  import AppRating from './AppRating'


    export default {
      components:{AppPage,AppRating},

      }

  </script>

<style>

</style>
