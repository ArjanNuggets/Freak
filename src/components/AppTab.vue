<template>
  <v-data-table

    :items="caracteristique"
    class="elevation-1"
    hide-actions
    hide-headers
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.entre }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td>
      <td class="text-xs-right">{{ props.item.iron }}</td>
    </template>
  </v-data-table>
</template>

<script>
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
    }
  }
</script>
