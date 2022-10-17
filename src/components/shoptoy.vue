<template>
    <div class="middle">
        <h1 class="description">New & Trending Products from DC Shop</h1>
        <div class="card">
        <div class="filmcard">
            <img src="../img/toy.png">
            <div class="filmcardinfo">
                <h1>BATMAN v SUPERMAN: DAWN OF JUSTICE Wonder Woman Grand Heritage Deluxe Costume</h1>
                <h2>169$</h2>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/toy2.png">
            <div class="filmcardinfo">
                <h1>BATMAN v SUPERMAN: DAWN OF JUSTICE Wonder Woman Grand Heritage Deluxe Costume</h1>
                <h2>569$</h2>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/toy3.png">
            <div class="filmcardinfo">
                <h1>BATMAN v SUPERMAN: DAWN OF JUSTICE Wonder Woman Grand Heritage Deluxe Costume</h1>
                <h2>369$</h2>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/toy4.png">
            <div class="filmcardinfo">
                <h1>BATMAN v SUPERMAN: DAWN OF JUSTICE Wonder Woman Grand Heritage Deluxe Costume</h1>
                <h2>269$</h2>
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
    height: 550px;
    box-sizing: border-box;
    position: relative;
    box-shadow: 0px 6px 10px 0 rgba(0,0,0,0.1);
    
}

.filmcard img {
    width: 63%;
    height: 60%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
}

.filmcardinfo {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    width: 100%;
}

h1 {
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    font-family: SnsCpt;
}

h2 {
    font-size: 12px;
    color: black;
    font-family: SnsCpt;
    position: absolute;
    left: 5px;
    margin-top: 30px;
    font-weight: bold;
}


</style>