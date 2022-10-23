<template>
    <div class="pic">
      <img :src="pic[count]" alt="">
      <div v-if="count === 0" class="info">
        <h2>GET TO KNOW</h2>
        <h1>Stephanie Brown</h1>
        <p>The daughter of a super-villain, Stephanie Brown now fights to put criminals like him 
            in prison and has found great success—and even greater friends—within the Bat-Family.</p>
          <button class="meet">Learn More</button>
      </div>
      <div v-if="count === 1" class="info">
        <h2>GET TO KNOW</h2>
        <h1>Cassandra Cain</h1>
        <p>The child of two assassins, Cassandra Cain should have been a killer. 
            Yet, in the ultimate case of nurture over nature, 
            she was taken in by Bruce Wayne and now fights for justice as part of the Bat-Family.</p>
          <button class="meet">Learn More</button>
      </div>
      <div v-if="count === 2" class="info">
        <h2>GET TO KNOW</h2>
        <h1>Barbara Gordon</h1>
        <p>As dangerous with a computer as she is with a batarang, Barbara Gordon has 
            risen from tragedy to become one of the world’s best—and most buzzed about—crime fighters.</p>
          <button class="meet">Learn More</button>
      </div>
      <div class="btn">
      <button :disabled="backDisable" @click="back">back</button>
      <button :disabled="disableBtn" @click="next">next</button>
    </div>
    </div>
  
  </template>
  
  <script>
  import img from '../characterscomponents/charactersimg/characterslide.png'
  import img2 from '../characterscomponents/charactersimg/characterslide2.png'
  import img3 from '../characterscomponents/charactersimg/characterslide3.png'
  
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
      src: url('../characterscomponents/PTSansCaption-Bold.ttf');
  }
  .pic {
    position: relative;
    width: 100%;
    margin-top: 40px;
  }
  
  .pic img {
    width: 50%;
    height: 550px;
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
    background-color: black;
    color: #6b6bdc;
  }
  
  .info {
    position: absolute;
    top: 30%;
    left: 60%;
  }
  
  h2{
    color: #0282F9;
    font-family: SnsCpt;
  }
  
  h1{
    color: black;
    margin-top: 15px;
    font-family: SnsCpt;
  }
  
  p {
    color: black;
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
    background-color: #0282F9;
    cursor: pointer;
    outline: none;
    border: none;
    font-family: SnsCpt;
    text-transform: uppercase;
  }

  
  </style>