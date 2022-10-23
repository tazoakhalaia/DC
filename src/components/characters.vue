<template>
<div>
    <Header />
    <CharacterSlide />
    <Community />
    <Nav />
    <Who />
    <Footer />
</div>

</template>

<script>
import Header from '../components/header.vue'
import CharacterSlide from '../components/characterscomponents/charactersslide.vue'
import Community from '../components/characterscomponents/dccharacterscommunity.vue'
import Nav from '../components/characterscomponents/nav.vue'
import Who from '../components/characterscomponents/whoiswho.vue'
import Footer from '../components/footer.vue'

export default{
    components: {
        Header,
        CharacterSlide,
        Community,
        Nav,
        Who,
        Footer
    }
}
</script>

<style></style>