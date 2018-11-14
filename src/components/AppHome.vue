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
                 <p>
                   <img src="../assets/spiderman.jpg" alt="">
                 </p>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>
             </v-expansion-panel-content>
             <v-expansion-panel-content >
               <div slot="header">Nba 2k19</div>
               <v-card>
                 <v-card-text>Synopsis : NBA 2K19 est la mouture 2019 du célèbre jeu de basket. Celle-ci possède une particularité : elle symbolise les vingt ans de la franchise de 2K Games et Visual Concepts. A cette occasion, nous découvrirons une démo intitulée "Le Prélude" avant de retrouver l'expérience tant attendue avec ses différents modes de jeu et un Lebron James en première de couverture.</v-card-text>
               </v-card>
               <router-link to='/NBA'>
                 <p>
                   <img src="../assets/nba2k19.jpg" alt="">
                 </p>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>


             </v-expansion-panel-content>
             <v-expansion-panel-content >
               <div slot="header">Red Dead Redemption II</div>
               <v-card>
                 <v-card-text>Synopsis : Suite du précédent volet multi récompensé, Red Dead Redemption II nous permettra de nous replonger dans une ambiance western synonyme de vastes espaces sauvages et de villes malfamées. Duels sous un soleil de plomb et grande aventure se partageront la vedette.</v-card-text>
               </v-card>
               <router-link to='/RDR2'>
                 <p>
                   <img src="../assets/RDR2.jpg" alt="">
                 </p>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>
             </v-expansion-panel-content>


             <v-expansion-panel-content >
               <div slot="header">Sims</div>
               <v-card>
                 <v-card-text>Synopsis : Les Sims 4 est une simulation de vie qui permet au joueur de créer ses personnages et de les faire évoluer dans un univers qu'il customise lui-même. Ce nouvel épisode fait apparaître les émotions qui sont déterminantes dans le ressenti et l'évolution des sims. Celles-ci dépendent de leur environnement. Les sims peuvent désormais effectuer plusieurs tâches en même temps, contrairement aux autres épisodes.</v-card-text>
               </v-card>
               <router-link to='/'>
                 <p>
                   <img src="../assets/sims.jpg" alt="">
                 </p>
               <v-btn flat>see more</v-btn>
               </router-link>
               <app-rating></app-rating>
             </v-expansion-panel-content>
           </v-expansion-panel>
         </v-flex>
       </v-layout>
     </v-container>
   </template>
   <template>

     <v-container >
       <v-layout row wrap>
         <v-flex xs12 lg5 mb-3>
           <v-expansion-panel popout dark>


             <v-expansion-panel-content >
               <div slot="header">Tests : </div>
               <v-card>
                 <v-card-text>Synopsis : Spider-Man est un jeu d'action sur PlayStation 4. Le Tisseur est de retour pour le plaisir des joueurs qui pourront alterner phases d'exploration en voltigeant de building en building, phases d’infiltration et affrontements contre les super-vilains comme Le Caïd, Vulture, Electro, Mister Negative, etc.</v-card-text>
               </v-card>
               <router-link to='/Spiderman'>
                 <p>
                   <img src="../assets/spiderman.jpg" alt="">
                 </p>
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
p{
  text-align: center;
}
</style>
