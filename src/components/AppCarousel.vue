<template>
  <v-carousel hide-delimiters style="height : 370px; width : 560px;"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      style="height: 100%"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('../assets/rdr1.jpg')
          },
          {
            src: require('../assets/spiderman.jpg')
          },
          {
            src: require('../assets/spiderman.jpg')
          },
          {
            src: require('../assets/mario.jpg')
          }
        ]
      }
    }
  }
</script>
