<template>
    <div class="wallpaper">
        <img src="../img/batmanwallpaper.jpg">
        <div class="wallpaperinfo">
            <h2>WEEKEND ESCAPE</h2>
            <h2>JSA: BLACK REIGN</h2>
            <h2>Want a Black Adam story that looks at justice and 
                power through a modern lens? We have one for you,
                 and you don't have to wait a week to experience it...</h2>
                 <div class="wallpaperbuttons">
                    <button>Looks Like Reign This Weekend</button>
                    <button style="margin-left: 20px;">GET BLACK ADAM TICKETS & SHOWTIMES</button>
                 </div>
        </div>
    </div>
    
</template>

<script>

</script>

<style scoped>
@font-face {
    font-family: SnsCpt;
    src: url('../assets/PTSansCaption-Bold.ttf');
}
.wallpaper {
    width: 100%;
    height: 1000px;
    position: relative;
}

.wallpaper img {
    width: 100%;
    height: 1000px;
}

.wallpaperinfo {
    position: absolute;
    top: 60%;
    left: 15%;
}

h2 {
    color: #FFFFFF;
    width: 600px;
    font-family: SnsCpt;
}

button {
    margin-top: 20px;
    width: 320px;
    height: 40px;
    border-radius: 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    font-family: SnsCpt;
    transition: 1.5s;
}

button:hover {
    background-color: #0d6efd;
}
</style>