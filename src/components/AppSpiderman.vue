<template>
      <div>
        <p>spiderman</p>
        <div>
          <label>Commentaire :</label>
          <input type="text" v-model="commentaire"/>
          <button @click="submitCom"> Add </button>
          <div>
            <ul>
              <li v-for="personCom of coms" v-bind:key="personCom['.key']">
                <p>{{personCom.commentaire}}</p>
                <button @click="removeCom(personCom['.key'])">Remove</button>
              </li>
            </ul>

          </div>
        </div>
  </div>
</template>

<script>
  import {spiderman} from '@/firebase';



  export default {

    firebase : {
       coms : spiderman
    },

    methods : {
      submitCom() {
        spiderman.push({commentaire : this.commentaire, edit: false});
        this.commentaire="";
      },

      removeCom(key) {
        spiderman.child(key).remove();
      }

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
