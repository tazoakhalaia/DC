<template>
<div class="middle">
    <div class="boxsize">
        <div class="boxtop">
    <div class="box" v-for="item in pic" :key="item">
        <img :src="item">
    </div>
</div>
<div class="bmbox">
    <div class="bottombox" v-for="items in otherpic" :key="items">
    <img :src="items" >
    </div>
</div>
</div>
<div class="minfro">
<div  class="info">
        <h2>Community</h2>
        <h1> The DC Book Club: Future State Swamp Thing</h1>
        <p>Join the DC Book Club -- This month we're reading Future State Swamp Thing!</p>
      </div>
      <div  class="info">
        <h1> Who Would Win: Enchantress vs. Doctor Fate</h1>
        <p>Join the DC Book Club -- This month we're reading Future State Swamp Thing!</p>
      </div>
    </div>

</div>

</template>

<script>
  import img from '../characterscomponents/charactersimg/community1.jpg'
  import img2 from '../characterscomponents/charactersimg/community2.jpg'
  import img3 from '../characterscomponents/charactersimg/community3.jpg'
  import img4 from '../characterscomponents/charactersimg/community4.jpg'
  import img5 from '../characterscomponents/charactersimg/community5.jpg'
  import img6 from '../characterscomponents/charactersimg/community6.jpg'
  import img7 from '../characterscomponents/charactersimg/community7.jpg'
  import img8 from '../characterscomponents/charactersimg/community8.jpg'

export default {
    data() {
        return {
            pic: [img,img2,img3,img4,],
            otherpic: [img5,img6,img7,img8]
        }
    }
}

</script>

<style scoped>

.middle {
    display: flex;
    width: 70%;
    margin: auto;
    flex-wrap: no-wrap;
    margin-top: 30px;

}

.box {
    width: 160px;
    height: 160px;
}

.box img {
    width: 100%;
}

.boxsize {
    width: 60%;
    float: left;
    flex-wrap: wrap;
}
.boxtop {
    display: flex;
    width: 100%;
    justify-content: space-between;

}

.bmbox {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.bottombox {
    width: 160px;
    height: 160px;
}

.bottombox img {
    width: 100%;
    height: 100%;
}

.minfro {
    width: 30%;
    flex-wrap: wrap;
    word-wrap: break-word;
}
.info {
    margin-left: 20px;
    width: 100%;
}

h2 {
    color: #0282F9;
}

h1 {
    font-size: 14px;
}
</style>