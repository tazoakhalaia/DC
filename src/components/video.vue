<template>

<div class="videocontainer">
    <iframe width="860" height="440" src="https://www.youtube.com/embed/mqqft2x_Aa4" 
    title="YouTube video player" frameborder="0" allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen></iframe>
    <div class="info">
    <h2>FEATURED VIDEO</h2>
    <h1>BATMAN | OFFICIAL TRAILER</h1>
    <p>There are heroes, there are villains and there is Black Adam. 
        Only in theaters October 21. <u>Advance tickets available now!</u> </p>
</div>
</div>

</template>

<script>

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
@font-face {
    font-family: SnsCpt;
    src: url('../assets/PTSansCaption-Bold.ttf');
}
.videocontainer {
    width: 80%;
    margin: auto;
    margin-top: 30px;
    display: flex;
}

.info {
    margin-top: 100px;
    margin-left: 20px;
}

h2{
    font-family: SnsCpt;
}

h1 {
    font-family: SnsCpt;
}

p{
    font-family: SnsCpt;
}

u{
    cursor: pointer;
}

</style>