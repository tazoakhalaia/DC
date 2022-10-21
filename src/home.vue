<template>
     <Header />
   <Wallpaper />
   <FilmTickets />
   <Video />
   <Trailer />
   <Toyshop />
   <Slide />
   <Footer />
 </template>
 
 <script>
 
 import Header from './components/header.vue'
 import Wallpaper from './components/wallpaper.vue'
 import FilmTickets from './components/filmtichet.vue'
 import Video from './components/video.vue'
 import Trailer from './components/lasttrailer.vue'
 import Toyshop from './components/shoptoy.vue'
 import Slide from './components/slide.vue'
 import Footer from './components/footer.vue'
 
 export default {
   name: 'App',
   components: {
     Header,
     Wallpaper,
     FilmTickets,
     Video,
     Trailer,
     Toyshop,
     Slide,
     Footer
   },
   data() {
     return {
       saxeli: "tazo"
     }
   },
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
 