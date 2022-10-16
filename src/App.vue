<template>
  <Header />
  <Wallpaper />
  <FilmTickets />
  <Video />
</template>

<script>

import Header from './components/header.vue'
import Wallpaper from './components/wallpaper.vue'
import FilmTickets from './components/filmtichet.vue'
import Video from './components/video.vue'

export default {
  name: 'App',
  components: {
    Header,
    Wallpaper,
    FilmTickets,
    Video
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
