<template>
    <div class="middle">
        <h1 class="description">LATEST TRAILERS, CLIPS & MORE</h1>
        <div class="card">
        <div class="filmcard">
            <img src="../img/comics.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/comics.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/comics.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/comics.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
            </div>
        </div>
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

.description{
    font-family: SnsCpt;
    font-size: 25px;
    margin-top: 20px;
    font-weight: bold;
}
.middle {
    width: 80%;
    margin: auto;
}

.card {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
}

.filmcard {
    margin-top: 50px;
    width: 306px;
    height: 350px;
    box-sizing: border-box;
    position: relative;
    box-shadow: 0px 6px 10px 0 rgba(0,0,0,0.1);
    
}

.filmcard img {
    width: 100%;
    height: 60%;
}

.filmcardinfo {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}

h1 {
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    font-family: SnsCpt;
}

h2 {
    font-size: 12px;
    color: #6c757d;
    font-family: SnsCpt;
}


</style>