<template>

 <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
      </v-carousel>

    <v-divider inset></v-divider>

    <div class='NBA ma-3'>
      <div class='display-2 font-weight-black'>NBA 2k19</div>
      <div class='display-1 mx-5 mt-1'>
        Synopsis : <br>
        NBA 2K19 est un jeu-vidéo de simulation de basket-ball
        développé par Visual Concepts et édité par 2K Sports. Il s'agit du
        vingtième opus de la franchise NBA 2K et le successeur de NBA 2K18.
        Giannis Antetokounmpo des Bucks de Milwaukee apparaît sur la jaquette de
         l'édition standard, tandis que LeBron James des Lakers de Los Angeles
         apparaît sur l'édition 20e Anniversaire. <br>
         NBA 2K19 est sorti le 11 septembre 2018 pour Microsoft Windows, Nintendo Switch,
         PlayStation 4, Xbox One. Il a reçu des critiques généralement favorables,
         qui ont salué le gameplay novateur. Certains pense qu'il s'agit du meilleur
         épisode de la franchise, tandis que d'autres mettent l'accent critique sur les micro-transactions.
          Le mode carrière dispose des commentaires en mandarin, une première dans l'histoire de la série.
        </div>

        <app-rating></app-rating>

    </div>

    <v-divider inset></v-divider>

    <div class="spiderman ma-3">
      <div class='display-2 font-weight-black'>Spiderman</div>
      <div class='display-1 mx-5 mt-1'>
        Synopsis : <br>
        Spider-Man est un jeu d'action sur PlayStation 4. Le Tisseur est de retour
         pour le plaisir des joueurs qui pourront alterner phases d'exploration en
         voltigeant de building en building, phases d’infiltration et affrontements
         contre les super-vilains comme Le Caïd, Vulture, Electro, Mister Negative, etc.

      </div>
      <app-rating></app-rating>
    </div>

    <v-divider inset></v-divider>

    <div class="RedDead ma-5">
      <div class='display-2 font-weight-black'>Red Dead Redemption II</div>
      <div class='display-1 mx-5 mt-1'>
        Synopsis : <br>
        Suite du précédent volet multi récompensé, Red Dead Redemption II nous
        permettra de nous replonger dans une ambiance western synonyme de vastes
         espaces sauvages et de villes malfamées. Duels sous un soleil de plomb
         et grande aventure se partageront la vedette.

      </div>
      <app-rating></app-rating>

    </div>

    <v-divider inset></v-divider>

    <div class="Fallout ma-5">
      <div class='display-2 font-weight-black'>Fallout 4</div>
      <div class='display-1 mx-5 mt-1'>
        Synopsis : <br>
        Fallout 4 est un RPG à la première personne se déroulant dans un univers
         post-apocalyptique. Dans un monde dévasté par les bombes, vous incarnez
         un personnage solitaire sortant d'un abri anti-atomique qui doit se faire
         sa place dans la ville de Boston et de ses environs.

      </div>
      <app-rating></app-rating>

    </div>



    <app-page></app-page>
  </div>

</template>

<script>
  import AppPage from './AppPage'
  import AppRating from './AppRating'

    export default {
      components:{AppPage,AppRating},
      data () {
        return {
          images: {
              logo: require('../assets/logo.png')
          },
          items: [
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
            },
            {
              src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
            },
            {
              src: require('../assets/logo.png'),
            }
          ],

          }

        }
      }

  </script>
