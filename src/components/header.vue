<template>
<header>
    <img src="../img/dclogo.png" class="dclogo">
    <div class="menu">
        <ul>
            <li><router-link to="/characters">Characters</router-link></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies & TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">More</a></li>
        </ul>
    </div>

    <div class="search">
        <input type="text">
    </div>

    <div class="info">
        <button class="signup">SIGN UP</button>
        <button class="login">LOGIN</button>
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            
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
@font-face {
    font-family: SnsCpt;
    src: url('../assets/PTSansCaption-Bold.ttf');
}
header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
}
.dclogo {
    width: 50px;
    height: 50px;
    margin-left: 70px;
}

.menu ul {
    display: flex;
}
.menu ul li {
    list-style: none;
}

.menu a {
    text-decoration: none;
    margin-left: 15px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: black;
    font-family: SnsCpt;
}

.menu a:hover {
    color: #0d6efd;
}
.info {
    position: absolute;
    right: 0;
}

button {
    margin-left: 10px;
    background-color: transparent;
    height: 60px;
    width: 70px;
    border: none;
    outline: none;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    font-family: SnsCpt;
}

.search {
    position: absolute;
    right: 200px;
}

.search input {
    width: 200px;
    height: 20px;
    border-radius: 5px;
    outline: none;
    border: 2px solid grey;
    padding-left: 28px;
    background: url('../img/searchbarlogo.png');
    background-repeat: no-repeat;
    background-size: 20px 20px;
    background-position: 5px center;
}
</style>