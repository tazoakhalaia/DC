<template>
  <div class="pic">
    <img :src="pic[count]" alt="">
    <div v-if="count === 0" class="info">
      <h2>GET TO KNOW</h2>
      <h1>BATMAN</h1>
      <p>One of the world’s foremost wielders of magic, 
        Black Adam has been both hero and villain 
        over a life that’s spanned thousands of years.</p>
        <button class="meet">MEET BATMAN</button>
    </div>
    <div v-if="count === 1" class="info">
      <h2>GET TO KNOW</h2>
      <h1>BATMAN | FLASH | WONDER WOMAN</h1>
      <p>One of the world’s foremost wielders of magic, 
        Black Adam has been both hero and villain 
        over a life that’s spanned thousands of years.</p>
        <button class="meet">MEET BATMAN</button>
    </div>
    <div v-if="count === 2" class="info">
      <h2>GET TO KNOW</h2>
      <h1>ALL DC CHARACTERS</h1>
      <p>One of the world’s foremost wielders of magic, 
        Black Adam has been both hero and villain 
        over a life that’s spanned thousands of years.</p>
        <button class="meet">MEET BATMAN</button>
    </div>
    <div class="btn">
    <button :disabled="backDisable" @click="back">back</button>
    <button :disabled="disableBtn" @click="next">next</button>
  </div>
  </div>

</template>

<script>
import img from '../img/slide.jpg'
import img2 from '../img/slide2.jpg'
import img3 from '../img/slide3.jpg'

export default {
  data() {
    return {
      backDisable: true,
      disableBtn: false,
      count: 0,
      pic: [img,img2,img3]
    }
  },
  methods: {
    next(){
      this.count++;
      this.backDisable = false;
      if(this.count === this.pic.length - 1){
        this.disableBtn = true;
      }
    },
    back(){
      this.count--;
      this.disableBtn = false;
      if(this.count === 0){
        this.backDisable = true;
      }
    }
  },

}
</script>

<style scoped>
@font-face {
    font-family: SnsCpt;
    src: url('../assets/PTSansCaption-Bold.ttf');
}
.pic {
  position: relative;
  width: 100%;
  margin-top: 40px;
}

.pic img {
  width: 100%;
  height: 850px;
}

.btn {
  width: 100%;
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
}

.btn button {
  border-radius: 5px;
  height: 50px;
  width: 80px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: SnsCpt;
  text-transform:  uppercase;
  color: #6b6bdc;
}

.info {
  position: absolute;
  top: 30%;
  left: 15%;
}

h2{
  color: #FFFFFF;
  font-family: SnsCpt;
}

h1{
  color: #FFFFFF;
  margin-top: 15px;
  font-family: SnsCpt;
}

p {
  color: #FFFFFF;
  width: 350px;
  font-size: 20px;
  margin-top: 15px;
  font-family: SnsCpt;
}

.meet {
  margin-top: 15px;
  width: 200px;
  height: 40px;
  color: #FFFFFF;
  background-color: transparent;
  cursor: pointer;
  border-radius: 8px;
  outline: none;
  border: 2px solid white;
  font-family: SnsCpt;
}

.meet:hover {
  background-color: #0d6efd;
}

</style>