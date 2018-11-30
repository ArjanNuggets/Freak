<template>

 <div>

   <div>
     <template>
       <v-container>
         <v-layout row wrap>
           <v-flex xs12 lg5 mb-3>
             <v-expansion-panel popout dark>
               <v-expansion-panel-content
               >
                 <div slot="header">Red Dead Redemption</div>
                 <v-card>
                   <v-card-text>RDR2</v-card-text>
                 </v-card>
                 <router-link to="/RDR2">See more</router-link>
               </v-expansion-panel-content>
             </v-expansion-panel>
           </v-flex>
           <v-flex xs12 lg5 mb-3>
             <v-expansion-panel popout dark>
               <v-expansion-panel-content
               >
                 <div slot="header">Spiderman</div>
                 <v-card>
                   <v-card-text>Spidey</v-card-text>
                 </v-card>
                 <router-link to="/Spiderman">See more</router-link>
               </v-expansion-panel-content>
             </v-expansion-panel>
           </v-flex>
           <v-flex xs12 lg5 mb-3>
             <v-expansion-panel popout dark>
               <v-expansion-panel-content
               >
                 <div slot="header">NBA 2k19</div>
                 <v-card>
                   <v-card-text>NBA2k19   lol</v-card-text>
                 </v-card>
                 <router-link to="/NBA">See more</router-link>
               </v-expansion-panel-content>
             </v-expansion-panel>
           </v-flex>

         </v-layout>
       </v-container>
     </template>
   </div>

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
div {
  text-align: center;
}
</style>
