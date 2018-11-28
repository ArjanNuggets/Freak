<template>

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
