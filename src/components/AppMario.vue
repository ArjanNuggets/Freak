<template>
      <div>
        <p>mario</p>





        <div>
          <div>
            <ul>
              <li v-for="personCom of coms" v-bind:key="personCom['.key']">

                <p class="commentaire"><inline class="name">{{personCom.name}} : </inline> {{personCom.commentaire}}</p>
                <button @click="removeCom(personCom['.key'])">Remove</button>
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
  import {mario} from '@/firebase';



  export default {

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
</style>
