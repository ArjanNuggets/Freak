<template>
    <div>

      <div class="temp">
        <p class="display-2 font-weight-medium pt-3">Red Dead Redemption</p>


          <div class="box">


            <div class="photo">
              <img src="../assets/RDR2.jpg" alt="Red Dead">
            </div>

            <div class="text">
            <p class="title font-weight-light"> <inline class="font-weight-bold"> Synopsis :</inline> Suite du précédent volet multi récompensé, Red Dead Redemption
              II nous permettra de nous replonger sur PS4 dans une ambiance western synonyme de
               vastes espaces sauvages et de villes malfamées. L'histoire se déroule en 1899, avant
                le premier Red Dead Redemption, au moment où Arthur Morgan doit fuir avec sa bande à la suite
                 d'un braquage raté. Duels sous un soleil de plomb et grande aventure se
                 partageront la vedette dès la fin de l'année 2018.</p>
            </div>
          </div>


          <div class="image pt-4">
            <p class="display-1">Images </p>

            </div>
            <div class="images">
              <div class="imgs">
                <img src="../images/RDR2/rdr.jpg" alt="image">
              </div>
              <div class="imgs elevation-2">
                <img src="../images/RDR2/rdr.jpg" alt="image">
              </div>
              <div class="imgs">
                <img src="../images/RDR2/rdr.jpg" alt="image">

              </div>

          </div>


          <div class="cara">
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

          <div class="comtitle text-md-left pt-4">
            <p class="display-1">Commentaires  </p>

            </div>
          <div class="display" >
            <ul>
              <li v-for="personCom of coms" v-bind:key="personCom['.key']">

                <p class="com subheading">
                  <button class="rm font-weight-light" @click="removeCom(personCom['.key'])"><v-icon class="brm">delete</v-icon></button>
                  <inline class="name">{{personCom.name}} : </inline> {{personCom.commentaire}}
                </p>


              </li>
            </ul>

          </div>



        <div class="commentaire">


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
          outline
          required
          >
          <input type="text" v-model="commentaire"/>

          </v-text-field>

          </v-flex>
          <button class="bcomment"@click="submitCom">Commenter</button>


        </div>
  </div>
  </div>
</template>

<script>
  import {redDead} from '@/firebase';



  export default {

    data () {
      return {
        headers: [
          {
            text: 'Red Dead Redemption',
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
            entre : 'Rockstar Games'
          },
          {
            value: false,
            name: 'Sortie : ',
            entre : '26 octobre 2018'
          },
          {
            value: false,
            name: 'Genre : ',
            entre : 'TPS'
          },
          {
            value: false,
            name: 'Thème(s) : ',
            entre : 'Western'
          },
          {
            value: false,
            name: 'Classification',
            entre : '+18 ans'
          },
          {
            value: false,
            name: 'Mode(s) : ',
            entre : 'En Ligne / Solo'
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
       coms : redDead
    },

    methods : {
      submitCom() {
        redDead.push({commentaire : this.commentaire, name : this.name, edit: false});
        this.commentaire="";
        this.name="";
      },

      removeCom(key) {
        redDead.child(key).remove();
      }

    }
  }
  </script>


<style>

.bcomment {
  margin-bottom: 30px;
}
.comtitle {
  margin-left: 150px;
}
.display {
  text-align: left;
  margin-left: 150px;
  margin-top: 20px;



}
.com {
  background-color: white;
  padding-left: 10px;
  padding-top: 10px;
  border-radius: 10px;
  margin-right: 200px;

}
.rm {
  background-color: white;
  margin-right: 10px;
}
.temp {
  background-color: #E0E0E0;
}
.bcomment {
  padding: 8px;
  border : 1px solid;
  margin-bottom: 10px;
  border-radius: 10px;
  }
button {
    padding: 8px;

    margin-bottom: 10px;
    border-radius: 10px;
    }

label {
  text-decoration: underline;
}

ul {
  list-style-type: none;
  padding: 0;
}

.commentaire {
  margin-top: 30px;
  background-color: #E0E0E0;
  margin-left: 500px;
  margin-right: 500px;

}

.name {
  font-weight: bold;
}


h2, h1 {
  text-align: center;
}


.box {
  display: flex;
  justify-content:space-around;
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

.photo {
  padding: 20px;
}

.cara {
  background-color: white;
  margin-top: 40px;
  padding-bottom: 10px;
  margin-bottom : 10px;
}
.caracteristique {
  display: flex;
  padding-left: 150px;

}
.image{
  display: flex;
  padding-left: 150px;

}

.images{
  display: flex;
  padding-left: 150px;
  flex-flow: row wrap;

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
