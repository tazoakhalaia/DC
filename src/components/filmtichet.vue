<template>
    <div class="middle">
        <div class="filmcard">
            <img src="../img/blackadam.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
                <button>GET TICKETS AND SHOWTIMES</button>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/blackadam.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
                <button>GET TICKETS AND SHOWTIMES</button>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/blackadam.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
                <button>GET TICKETS AND SHOWTIMES</button>
            </div>
        </div>
        <div class="filmcard">
            <img src="../img/blackadam.jpg">
            <div class="filmcardinfo">
                <h2>ONLY IN THEATERS OCTOBER 21</h2>
                <h1>SHOP OUR BATMAN COLLECTION</h1>
                <button>GET TICKETS AND SHOWTIMES</button>
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
.middle {
    width: 80%;
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
    width: 100%;
    height: 80%;
    clip-path: polygon(0 0, 100% 0%, 100% 46%, 0 73%);
}

.filmcardinfo {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}

h1 {
    font-size: 17px;
    font-weight: bold;
    margin-top: 10px;
    font-family: SnsCpt;
}

h2 {
    font-size: 12px;
    color: #6c757d;
    font-family: SnsCpt;
}

button{
    text-transform: uppercase;
    width: 230px;
    height: 50px;
    border-radius: 20px;
    margin-top: 20px;
    outline: none;
    border: 2px solid black;
    cursor: pointer;
    font-weight: bold;
    font-family: SnsCpt;
    transition: 1.5s;
}

button:hover {
    background-color: #0d6efd;
}

</style>