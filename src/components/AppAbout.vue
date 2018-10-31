<template>
  <div>
    <v-timeline>
      <v-timeline-item
        color="red lighten-2"
        large
      >
        <span slot="opposite">2018</span>
        <v-card class="elevation-3">
          <v-card-title class="display-1">4ème OC :</v-card-title>
          <v-card-text class="headline">
            Les survivants du groupe, c'est à dire Gaetan et Arian. Créent ce site
            en hommage au soldat tombé au combat.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="red lighten-2"
        large
      >
        <span slot="opposite">2017</span>
        <v-card class="elevation-3">
          <v-card-title class="display-1">Fin de l'année</v-card-title>
          <v-card-text class="headline">
            Perte du soldat Nico, ayant raté son année il fuit la bataille en direction
            de l'ECG. Il sera à jamais dans nos coeurs.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        color="red lighten-2"
        large
      >
        <span slot="opposite">2017</span>
        <v-card class="elevation-3">
          <v-card-title class="display-1">3ème OC :</v-card-title>
          <v-card-text class="headline">
            Création du groupe Gaetan, Nico et Arian. Nous sommes récompensé d'un 5
            pour notre travail.
          </v-card-text>
        </v-card>
      </v-timeline-item>

    </v-timeline>
    <app-dialog></app-dialog>
  </div>
</template>

<script>
  import AppDialog from './AppDialog'
  export default {
    components:{AppDialog}
  }

</script>
