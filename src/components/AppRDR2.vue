<template>
  <div>
    <img src="../assets/RDR2.jpg">
    <v-spacer></v-spacer>
    <title>Red Dead Redemption</title>
        <v-spacer></v-spacer>
    <p>Synopsis :</p>
    <p>Suite du précédent volet multi récompensé, Red Dead Redemption II
      nous permettra de nous replonger dans une ambiance western synonyme de vastes espaces
      sauvages et de villes malfamées. Duels sous un soleil de plomb et grande aventure
      se partageront la vedette.</p>

      <p>Date de sortie : 26 Octobre 2018</p>
      <p>Scénario :</p>
      <p>En 1899 (soit 12 ans avant les principaux événements de Red Dead Redemption), suite à un braquage qui a mal tourné dans la ville de Blackwater, la bande de Dutch van der Linde est traquée par les agents fédéraux et les chasseurs de primes. Prenant la fuite vers l'est, le gang commet méfaits sur méfaits pour survivre, bien que des querelles internes menacent de le disloquer. Le bras droit de Dutch, Arthur Morgan, est lui aussi tiraillé entre ses propres idéaux et sa loyauté envers la bande qui l'a élevé.</p>
    <v-spacer></v-spacer>
    <div>
      </br>
      <p>Commentaires</p>
      <div>
        <ul>
          <li v-for="personName of names" v-bind:key="personName['.key']">
            <div>
              <p>{{personName.name}}</p>
              <button @click="removeName(personName['.key'])">Supprimer</button>
            </div>
          </li>
        </ul>
      </br>

      </div>
      <label>Ecrire un commentaire :</label>
      <input type="text" v-model="name" />
      <button @click="submitName()">Ajouter</button>
    </div>
    </br>
  </div>
</template>

<script>
import {namesRef} from '@/firebase';



export default {

  firebase : {
    names : namesRef
  },

  methods : {
    submitName() {
      namesRef.push({name : this.name, edit: false});
      this.name="";
    },

    removeName(key) {
      namesRef.child(key).remove();
    },

  }
}
</script>
<style>

button, input {
    border : 1px solid;
  }

label {
  text-decoration: underline;
}

p {
  margin-left: 200px;
  margin-right: 200px;
  text-align: justify;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
