<template>


      <div class="temp">
        <p class="display-2 font-weight-medium pt-3">Mario</p>


          <div class="affichageSyno">


            <div class="photo">
              <img src="../assets/mario.jpg" alt="Mario">
            </div>

            <div class="text">
            <p class="title font-weight-light">
              <inline class="font-weight-bold"> Synopsis : </inline>Super Mario
              Odyssey est un jeu de plate-forme sur Switch où la princesse Peach
              a été enlevée par Bowser. Pour la sauver, Mario quitte le royaume
               Champignon à bord de l'Odyssey. Accompagné de Chappy, son chapeau
                vivant, il doit parcourir différents royaumes et faire tout pour
                vaincre, une nouvelle fois, le terrible Bowser.</p>
            </div>
          </div>

            <div class="affichageICara">
              <div class="affichageImage">

                <div class="image pt-4">
                  <p class="display-1">Images </p>
                  </div>

                <div class="templateImage">
                  <v-carousel hide-delimiters style="height : 370px; width : 560px;" class="carousel"
                  >
                    <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      :src="item.src"
                      style="height: 100%"
                    ></v-carousel-item>
                  </v-carousel>
                  </div>


                </div>




              <div class="affichageCara">
                <div class="caracteristique pt-4">
                  <p class="display-1">Caractéristique du jeu</p>

                  </div>

                <div class="caracteristique pt-4 pb-4">

                  <v-data-table

                    :items="caracteristique"
                    class="elevation-6"
                    hide-actions
                    hide-headers

                  >
                    <template slot="items" slot-scope="props">
                      <td class="tabname subheading">{{ props.item.name }}</td>
                      <td class="tabval text-xs-left subheading pr-5">{{ props.item.entre }}</td>
                    </template>
                  </v-data-table>


                </div>
              </div>

            </div>



              <div class="affichageCom">
                <div class="comtitle text-md-left pt-4">
                  <p class="display-1">Les avis des joueurs</p>

                  </div>

                <div class="display" >
                  <ul>
                    <li v-for="personCom of coms" v-bind:key="personCom['.key']">

                      <p class="com subheading">
                        <button class="rm font-weight-light" @click="removeCom(personCom['.key'])"><v-icon class="brm">delete</v-icon></button>
                        <inline class="name">{{personCom.name}} : </inline> <inline class="font-italic">{{personCom.commentaire}}</inline>
                      </p>


                    </li>
                  </ul>

                </div>
              </div>
              <div class="commenter">

                  <v-flex>
                    <v-text-field
                      label="Pseudo"
                      v-model="name"
                      value=""
                      outline
                      required
                      >
                      <input type="text" v-model="name"/>
                      </v-text-field>

                    <v-text-field
                      label="Commentaire"
                      v-model="commentaire"
                      value =""
                      outline
                      required
                      >
                      <input type="text" v-model="commentaire"/>

                      </v-text-field>

                    </v-flex>


                    <button class="bcomment"@click="submitCom">Commenter</button>



              </div>





  </div>

</template>

<style>

    .affichageCom {
    background-color: white;
    border-radius: 20px;
    margin-top: 30px;
    margin-left: 150px;
    margin-right: 150px;
    padding-right: 30px;
    padding-bottom: 20px;
    margin-bottom: 30px;


    }
    .commenter {

      background-color: white;
      border-radius: 20px;
      padding-top: 40px;
      padding-bottom: 20px;
      padding-left: 30px;
      margin-left: 500px;
      margin-right: 500px;
      padding-right: 30px;

      }

  .photo {
    padding: 20px;
  }
  .affichageImage{
    background-color: white;
    border-radius: 20px;
    margin-left: 150px;
    margin-right: 20px;

  }

  .carousel {
    margin-left: 30px;
    border-radius: 20px;
    margin-right: 30px;
  }

  .image{
    display: flex;
    padding-left: 30px;
  }

  .affichageICara {
    display: flex;

  }


  .comtitle {
    margin-left: 40px;
  }

  .display {
    text-align: left;
    margin-left: 40px;
    margin-top: 20px;


  }

  .com {
    background-color: #EFF0F0;
    padding-left: 10px;
    border-radius: 10px;
    padding-right: 10px;



  }

  .rm {
    margin-right: 10px;
  }

  .temp {
    background-color: #EFF0F0;
    padding-bottom: 20px;
  }

  .bcomment {
    padding: 8px;
    border : 1px solid;
    border-radius: 10px;
    }

  button {
      padding: 8px;
      border-radius: 10px;
      }

  label {
    text-decoration: underline;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }


  .name {
    font-weight: bold;
  }

  h2, h1 {
    text-align: center;
  }

  .affichageSyno {
    display: flex;
    background-color: white;
    margin-bottom: 20px;
    margin-left: 150px;
    margin-right: 150px;
    margin-top: 20px;
    border-radius: 10px;
  }

  .text {
    padding: 20px;
    padding-left: 30px;
    text-align: justify;
  }

  .affichageCara {

    border-radius: 20px;
    background-color: white;
    padding-left: 60px;
    padding-right: 270px;
    padding-bottom: 30px;
  }

  .caracteristique {
    display: flex;
  }

  table {
    border-collapse: collapse;
  }

  td {
    border: 1px solid #E0E0E0;
  }

  .tabname {
    background-color: #EEEEEE;
  }

  .tabval {
    background-color: white;
  }

  </style>
<script>
  import {mario} from '@/firebase';



  export default {
    data () {
      return {
        items: [
          {
            src: require('../images/MARIO/mario.jpg')
          },
          {
            src: require('../images/MARIO/mario1.jpg')
          },
          {
            src: require('../images/MARIO/mario2.jpg')
          },
          {
            src: require('../images/MARIO/mario3.jpg')
          }
        ],

        headers: [
          {
            text: 'Mario',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Entrée', value: 'entre' },
        ],
        caracteristique: [
          {
            value: false,
            name: 'Editeur(s) : ',
            entre : 'Nintendo'
          },
          {
            value: false,
            name: 'Sortie : ',
            entre : '27 Octobre 2017'
          },
          {
            value: false,
            name: 'Genre : ',
            entre : "Plate-Forme"
          },
          {
            value: false,
            name: 'Classification',
            entre : '+3 ans'
          },
          {
            value: false,
            name: 'Mode(s) : ',
            entre : 'Solo'
          },
          {
            value: false,
            name: 'Model économique',
            entre : "Payant à l'acquisition"
          }
        ]
      }
    },

    firebase : {
       coms : mario
    },

    methods : {
      submitCom() {
        mario.push({commentaire : this.commentaire, name : this.name, edit: false});
        this.commentaire="";
        this.name="";
      },

      removeCom(key) {
        mario.child(key).remove();
      }

    }
  }
  </script>
