<template>
      <div>
        <p>spiderman</p>





        <div>
          <div class="commentaire">
            <ul>
              <li v-for="personCom of coms" v-bind:key="personCom['.key']">

                <p class="commentaire"><inline class="name">{{personCom.name}} : </inline> {{personCom.commentaire}} <button @click="removeCom(personCom['.key'])">Remove</button></p>
              </li>
            </ul>

          </div>
          <div class="annexe2">
            <v-text-field
              v-model="name"
              label="Name"
              required
            ><input type="text" v-model="name"/></v-text-field>
          </div>
          <div class="annexe1">
            <v-text-field
              v-model="commentaire"
              label="Commentaire"
              required
            ><input type="text" v-model="commentaire"/></v-text-field>
                      <button @click="submitCom"> Add </button>
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
        spiderman.push({commentaire : this.commentaire, name : this.name, edit: false});
        this.commentaire="";
        this.name="";
      },

      removeCom(key) {
        spiderman.child(key).remove();
      }

    }
  }
  </script>


<style>

button {
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
.annexe1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 400px;
  margin-right: 400px;
}
.annexe2 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 400px;
  margin-right: 1000px;
}
.name {
  font-weight: bold;
}

.commentaire {
  background-color: #E0E0E0;

}
</style>
