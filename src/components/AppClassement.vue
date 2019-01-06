<template>
  <div class="tout">
    <div class="display-2 font-weight-medium pt-3">Classement</div>
    <div class="classement">
      <v-data-table
        :headers="headers"
        :items="jeux"
        dark
        class="elevation-1"
      >
        <template slot="headerCell" slot-scope="props">
          <v-tooltip bottom>
            <span slot="activator">
              {{ props.header.text }}
            </span>
            <span>
              {{ props.header.text }}
            </span>
          </v-tooltip>
        </template>
        <template slot="items" slot-scope="props">
          <td class="name">{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.rank }}</td>
        </template>
      </v-data-table>
    </div>
  </div>


  </template>

<style>

  .tout {
    background-color: #E0E0E0;
    }
  .classement {
    padding-top : 20px;
    margin-left: 400px;
    margin-right: 400px;
    padding-bottom: 40vh;
    }
    </style>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Jeux',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Rang', value: 'rank', align : 'center' },
        ],
        jeux: [
          {
            value: false,
            name: 'Red Dead Redemption 2',
            rank: 1,

          },
          {
            value: false,
            name: 'God Of War',
            rank :3,
          },
          {
            value: false,
            name: 'Super Mario Odyssey',
            rank :4,

          },
          {
            value: false,
            name: 'NBA2k19',
            rank : 5,

          },
          {
            value: false,
            name: 'Spiderman',
            rank : 2,

          }
        ]
      }
    }
  }
  </script>
