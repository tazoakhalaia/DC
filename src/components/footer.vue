<template>
<footer>
    <div class="footerinfo">
        <div class="info">
        <h1>JOIN THE DC UNIVERSE</h1>
        <p>Register for FREE to access member-exclusive content and activities, 
            read FREE comics 
            from DC UNIVERSE INFINITE, and get alerts and early 
            access to exclusive products from DC Shop! </p>
            <button class="sign">SIGN UP NOW</button>
        </div>
            <div class="footerimg">
                <img src="../img/footerimg.jpg">
            </div>
    </div>
<div class="footerbottom">
    <div class="bottomimg">
        <img src="../img/dclogo.png" alt="">
    </div>
    <h4 class="right">™ & © 2022 DC AND WBEI. ALL RIGHTS RESERVED</h4>
</div>
</footer>
</template>
<script>

</script>
<style scoped>
@font-face {
    font-family: SnsCpt;
    src: url('../assets/PTSansCaption-Bold.ttf');
}
footer {
    position: relative;
    width: 100%;
    height: 600px;
    background: linear-gradient(to right, rgb(75, 5, 156),rgb(195, 138, 239));
    margin-top: 200px;
}

.footerbottom {
    width: 100%;
    height: 220px;
    position: absolute;
    background-color: black;
    bottom: 0;
}

.footerinfo {
    position: absolute;
    top: 15%;
    margin-left: 8%;
    display: flex;
}

button{
  border-radius: 10px;
  height: 50px;
  width: 200px;
  background-color: transparent;
  border: 2px solid white;
  outline: none;
  cursor: pointer;
  font-family: SnsCpt;
  text-transform:  uppercase;
  color: #FFFFFF;
}

h1{
    font-family: SnsCpt;
    color: #FFFFFF;
}

p {
    font-family: SnsCpt;
    color: #FFFFFF;
    width: 50%;
}

.footerimg img {
    height: 400px;
    width: 550px;
}

.footerimg {
    position: absolute;
    top: -80px;
    right: 0;
}

.bottomimg img {
    width: 100px;
    height: 100px;
}

.bottomimg {
    position: absolute;
    left: 50%;
}

.right {
    font-family: SnsCpt;
    color: #FFFFFF;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>