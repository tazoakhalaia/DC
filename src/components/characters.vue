<template>
<div>
    <router-link to="/">add</router-link>
    <Header />
    <CharacterSlide />
    <Community />
    <Nav />
</div>

</template>

<script>
import Header from '../components/header.vue'
import CharacterSlide from '../components/characterscomponents/charactersslide.vue'
import Community from '../components/characterscomponents/dccharacterscommunity.vue'
import Nav from '../components/characterscomponents/nav.vue'

export default{
    components: {
        Header,
        CharacterSlide,
        Community,
        Nav
    }
}
</script>

<style></style>