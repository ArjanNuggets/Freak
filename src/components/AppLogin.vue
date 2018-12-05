<template>
  <div class="box">
    <v-form v-model="valid">
      <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
          <button @click='submitName' name="button">Connecter</button>
    </v-form>

  </div>


</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }),
    methods: {
    submitName() {
      name.push({Name : this.name, edit: false});
      this.name="";
      email.push({Email : this.email, edit: false});
      this.name="";
    },
  }
}
</script>

<style>

.box {
  margin-left: 400px;
  margin-right: 400px;
  margin-top: 50px;
  margin-bottom: 50px;
}

button {
  border: 2px solid;
  padding: 2px;
}
</style>
